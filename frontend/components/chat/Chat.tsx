"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { ChatCompletionRequestMessage } from "openai"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

import ChatMessages from "@/components/chat/ChatMessages"
import ChatForm from "@/components/chat/ChatForm"
import ChatScroll from "@/components/chat/ChatScroll"

import * as z from "zod"
import axios from "axios"

import { CharacterType } from '@/components/audio/types'
import { Characters } from '@/components/audio/config'
import CharacterSelect from '@/components/audio/character-select'

// 音声機能を有効にするかのフラグ（環境変数で制御可能）
const useAudio = process.env.NEXT_PUBLIC_USE_AUDIO === "true";

// フォームのバリデーションスキーマ
const FormSchema = z.object({
  prompt: z.string().min(2, {
    message: "2文字以上入力する必要があります。",
  }),
})

export type FormValues = z.infer<typeof FormSchema>

const Chat = () => {
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])
  const router = useRouter()
  const { toast } = useToast()
  const [character, setCharacter] = useState<CharacterType>(Characters[0])

  // 音声再生（useAudio が true のときのみ有効）
  const playAudio = async (text: string, speaker: string) => {
    if (!useAudio) return; // 音声機能が無効なら何もしない

    try {
      const responseAudio = await axios.post('/api/audio', { text, speaker })
      const base64Audio = responseAudio?.data?.response
      const byteArray = Buffer.from(base64Audio, 'base64')
      const audioBlob = new Blob([byteArray], { type: 'audio/x-wav' })
      const audioUrl = URL.createObjectURL(audioBlob)
      const audio = new Audio(audioUrl)
      audio.volume = 1
      audio.play()
    } catch (e) {
      console.error(e)
    }
  }

  // フォームの状態を管理
  const form = useForm<FormValues>({
    defaultValues: { prompt: "" },
    resolver: zodResolver(FormSchema),
  })

  // ローディング状態
  const loading = form.formState.isSubmitting

  // フォームの送信処理
  const onSubmit = async (data: FormValues) => {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: data.prompt,
      }

      const newMessages = [...messages, userMessage]
      setMessages(newMessages)

      const response = await axios.post("/api/chat", { messages: newMessages })

      if (response.status === 200) {
        const updatedMessages = [...newMessages, response.data];
        setMessages(updatedMessages);

        // 最新のメッセージで音声を再生（useAudio が true の場合のみ）
        if (useAudio) {
          const latestMessageContent = typeof response.data.content === 'string'
            ? response.data.content
            : userMessage.content;
          playAudio(latestMessageContent, character.value);
        }

        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "メッセージの取得に失敗しました",
          description: "内容をご確認ください",
        })
      }
    } catch (error) {
      console.error(error)
      toast({
        variant: "destructive",
        title: "メッセージの取得に失敗しました",
        description: "内容をご確認ください",
      })
    } finally {
      router.refresh()
    }
  };

  return (
    <>
      <ChatMessages messages={messages} loading={loading} />
      <ChatScroll messages={messages} />

      <div className="pb-4 inset-x-0 max-w-screen-md px-5 mx-auto bg-white">
        <ChatForm form={form} onSubmit={onSubmit} loading={loading} />
      </div>

      <div className="flex gap-4">
        {/* キャラクター選択（音声が有効な場合のみ表示） */}
        {useAudio && (
          <div>
            <CharacterSelect setCharacter={setCharacter} playAudio={playAudio} />
          </div>
        )}
      </div>
    </>
  )
}

export default Chat
