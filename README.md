# kessyNuma　# **Public Goods Funding Simulation with AI Agents

## **Overview**  
This project introduces a **public goods funding simulation** where **AI-generated virtual residents** participate in decision-making using **Quadratic Voting (QV)** and **a Polymarket-inspired mechanism** for municipal currency distribution. By integrating **Celestia** for data availability, this system enhances **community-driven resource allocation** and **civic engagement** in local governance.

### **Key Features**  
- **AI-Driven Virtual Residents**: Simulated agents propose projects and vote using QV, reflecting diverse civic preferences.  
- **Quadratic Voting**: Ensures fair representation by allowing residents to express the intensity of their preferences.  
- **Polymarket-Inspired Market Mechanism**: Municipal currency is distributed based on **prediction market dynamics**, aligning funding with **community-backed confidence in projects**.  
- **Celestia for Transparent Governance**: Ensures verifiable and scalable decision-making.  
- **Target Users**: Local governments, civic organizations, and community-driven projects.  

---

## **Problem**  
Current resource allocation in local communities is inefficient, often failing to reflect true community needs. Key data points include:

### **1. Inefficiencies in Public Goods Funding**  
- **60% of municipal budgets** are spent on **top-down decisions** that may not align with actual community priorities [¹].  
- **Traditional voting methods** lead to **majority rule biases**, overlooking niche but impactful projects [²].  

### **2. Low Civic Participation in Decision-Making**  
- **Less than 40% of eligible residents** actively engage in municipal budget allocation or project voting [³].  
- Lack of **accessible and engaging platforms** discourages broader participation, limiting diverse inputs [⁴].  

### **3. Poor Impact Evaluation of Funded Projects**  
- **50% of publicly funded projects** lack transparent impact metrics, making it difficult to assess **funding effectiveness** [⁵].  
- **Misaligned incentives** result in projects receiving funds based on political influence rather than merit [⁶].  

### **4. Barriers to Web3 Adoption in Local Governance**  
- **70% of blockchain-based governance experiments** fail due to **usability issues and low adoption rates** [⁷].  
- Existing Web3 funding models struggle with **real-world integration**, limiting their effectiveness in civic engagement [⁸].  

---

## **Solution**  
This project proposes a **decentralized civic engagement platform** that utilizes **Quadratic Voting and a Polymarket-inspired mechanism** to optimize resource allocation:

### **1. AI-Generated Civic Participation**  
- AI-driven virtual residents simulate **diverse community perspectives**, generating **realistic public discourse**.  
- AI-based analysis **predicts project impact**, supporting data-driven funding decisions.  

### **2. Quadratic Voting for Fairer Allocation**  
- Prevents **vote monopolization**, allowing citizens to allocate **voting credits** based on project importance.  
- Encourages **more nuanced decision-making**, leading to better distribution of municipal resources.  

### **3. Polymarket-Inspired Funding Mechanism**  
- Residents participate in a **prediction-market-like system**, where municipal currency is distributed **based on collective belief in project success**.  
- Ensures funding aligns with **community-backed confidence** rather than arbitrary government decisions.  
- Encourages **transparent market-driven funding**, increasing project accountability and efficiency.  

### **4. Integration with Celestia for Transparent Data Availability**  
- Provides **secure, scalable, and tamper-proof** governance records.  
- Enhances **trust in the decision-making process**, making funding allocations **auditable and verifiable**.  

---

## **Expected Impact**  
✅ **More efficient allocation** of municipal resources based on **real community needs**.  
✅ **Increased civic engagement** through **AI-driven simulations** and **Quadratic Voting**.  
✅ **More accountable funding** via **Polymarket-style forecasting** and transparent governance records.  
✅ **Bridging Web3 and real-world governance**, enabling seamless blockchain integration in local decision-making.  

---





### Tech Stack:

- [Privy Wallets](https://github.com/Jun0908/KessyNuma/tree/main/frontend/privy)

- [Farcaster API](https://github.com/Jun0908/KessyNuma/tree/main/api/Farcaster) 


**Text to Image with LLM Mint**

We implemented a system where each LLM can be minted as an NFT, allowing NFT holders to access text-to-image prompt capabilities. The text-to-image generation is powered by Hyperbolic, a decentralized GPU network, ensuring robust, distributed processing for high-quality image creation. The generated images are stored securely on Storacha by Protocol Labs, ensuring decentralized and reliable storage. Each image is then minted as a unique NFT, creating a seamless ecosystem where users can generate, store, and own digital content with blockchain-backed authenticity and provenance.

<img width="624" alt="スクリーンショット 2024-11-17 0 15 25" src="https://github.com/user-attachments/assets/ed41036b-ffa2-4004-9726-34a5291e264d">

### Development

**PredictionMarket.sol Contracts**

| contract                   |                                                                                                                   contract address |
| :------------------------- | ---------------------------------------------------------------------------------------------------------------------------------: |
| Ethereum Sepolia    | [0xd644eeb2217d02f167e8865fff55079fc140e971](https://etherscan.io/address/0x208f38670a2ef67e6c0a6579a10191fbd7a1b535)|
| Base Testnet   | [0xe2a548dacdbc942d659a523fd40335000c80064c](https://sepolia.scrollscan.com/address/0xe2a548dacdbc942d659a523fd40335000c80064c)|

**LiquidDemocracy.sol Contracts**

| contract                   |                                                                                                                   contract address |
| :------------------------- | ---------------------------------------------------------------------------------------------------------------------------------: |
| Ethereum Sepolia    | [0x74cf78c3f04b64ebaa6750a68eab89335b10c3fe](https://etherscan.io/address/0x74cf78c3f04b64ebaa6750a68eab89335b10c3fe)|
| Base Testnet   | [0x89e0a255c7f70250fcad3dba5954a90a169b4983](https://sepolia.basescan.org/address/0x1440a247071edde7e1016b18126163d805f98c31)|

**QuadraticVoting.sol Contracts**

| contract                   |                                                                                                                   contract address |
| :------------------------- | ---------------------------------------------------------------------------------------------------------------------------------: |
| Ethereum Sepolia    | [0x934061130559f53ff6b57f5e54884d1245e09f41](https://sepolia.etherscan.io/address/0x934061130559f53ff6b57f5e54884d1245e09f41)|
| Base Testnet    | [0x1440a247071edde7e1016b18126163d805f98c31](https://testnet.bkcscan.com/tx/0xbdf24996cb511ef7827063563d3bdd3053e51a790daefb024b53da882487e393)|



### What's next for
- **FineTuning**: Fine-tuning involves reducing bias by incorporating diverse datasets, allowing the model to better represent various cultural and linguistic perspectives, thus improving accuracy and fairness across different contexts.
- **[zkLLM](https://github.com/jvhs0706/zkllm-ccs2024)**: zkLLM (zero-knowledge Language Model) leverages zero-knowledge proofs to ensure privacy-preserving interactions with language models. This approach enables users to verify model responses without exposing sensitive data, enhancing trust and security in AI applications.

We would like to create **the society with decentralized value** by increasing **diverse evaluation criteria**.


### Implementation Status

| Title          |                                                              URL |
| :------------- | ---------------------------------------------------------------: |
| Demo Movie      |                                      [KessyNuma-demo](https://youtu.be/agQj5_Lpucc)|
| Pitch Doc    |   [KessyNuma-presentation](https://www.canva.com/design/DAGVtA0iy08/Sz0p5ehf7WcXCwoIdE_ZVg/edit?utm_content=DAGVtA0iy08&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton) |
| Demo Site     |                                 [KessyNuma-demo](https://kessy-front.vercel.app/)| 


## **References**  
[¹] Ostrom, E. (1990). *Governing the Commons: The Evolution of Institutions for Collective Action*. Cambridge University Press.  
[²] Lalley, S. P., & Weyl, E. G. (2018). *Quadratic Voting: How Mechanism Design Can Radicalize Democracy*. American Economic Association.  
[³] Verba, S., Schlozman, K. L., & Brady, H. E. (1995). *Voice and Equality: Civic Voluntarism in American Politics*. Harvard University Press.  
[⁴] Fung, A. (2006). *Varieties of Participation in Complex Governance*. Public Administration Review, 66(s1), 66-75.  
[⁵] Banerjee, A., Duflo, E., & Glennerster, R. (2013). *Putting a Band-Aid on a Corpse: Incentives for Nurses in the Indian Public Health System*. Journal of European Economic Association, 11(2-3), 487-517.  
[⁶] Fisman, R., & Miguel, E. (2007). *Corruption, Norms, and Legal Enforcement: Evidence from Diplomatic Parking Tickets*. Journal of Political Economy, 115(6), 1020-1048.  
[⁷] Atzori, M. (2017). *Blockchain-Based Governance in the Future Society*. The Journal of the British Blockchain Association, 1(1), 1-16.  
[⁸] Wright, A., & De Filippi, P. (2015). *Decentralized Blockchain Technology and the Rise of Lex Cryptographia*. Social Science Research Network (SSRN).  

---

