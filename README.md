# 📱 KOINSAVE — Mobile App (React Native + Expo)

Koinsave is a simple wallet application built with **React Native**, **Expo**, and **TypeScript**.  
Users can:

- Create an account  
- Log in  
- Fund their wallet  
- Send money to another user via email  
- View all transactions  

This repository contains the **mobile UI** and **frontend logic**, connected to a minimalistic Node.js / Ts / Express / MongoDB backend.

---

## 📦 **Download APK**
You can install the latest Android build here:

👉 **APK Download:** _<[APK URL](https://drive.google.com/drive/folders/1-akFFenn2zKrVLl5U8T4wlqJJsEZKGXk)>_

---

## 🛠 **Tech Stack**

**Frontend**
- React Native (0.81+)
- Expo (SDK 54)
- TypeScript
- React Navigation (Native Stack)
- Axios (API calls)
- Formik + Yup (forms + validation)
- AsyncStorage (token persistence)

**State Management**
- Custom `UserProvider` using React Context API

---

## 📁 Folder Structure

Below is an overview of the project structure:

src/
├── api/ # API clients (axios)
├── components/ # Reusable UI components
├── contexts/ # User/auth context
├── hooks/ # Custom hooks
├── model/ # Type models (TS interfaces)
├── Navigations/ # All app navigators
├── Schemas/ # Yup validation schemas
├── screens/ # All screens
└── utils/ # Helper functions

yaml
Copy code

### Folder Structure Preview
<img src="/mnt/data/8dfebbb3-4e03-49bc-bc89-69f653ba1738.png" width="350" />

---

## 🧭 Navigation Flow

The app uses a **Root Stack Navigator** to switch between authentication and main app screens based on login state.

### **RootStackParamList**
```ts
export type RootStackParamList = {
  AuthStack: undefined;
  MainStack: undefined;
};
Conditional Navigation
ts
Copy code
const { user } = useUser();

return (
  <RootStack.Navigator screenOptions={{ headerShown: false }}>
    {!user.token ? (
      <RootStack.Screen name="AuthStack" component={AuthNavigator} />
    ) : (
      <RootStack.Screen name="MainStack" component={MainNavigator} />
    )}
  </RootStack.Navigator>
);
App Entry
ts
Copy code
export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </UserProvider>
  );
}
🔌 API Integration (Minimalist)
The app interacts with your backend using Axios.

Example (sending money)
ts
Copy code
await sendMoney(token, {
  receiverEmail,
  purpose,
  amount: Number(amount),
});
API Structure
bash
Copy code
src/api/
 ├── apiClient.ts
 ├── auth.ts
 └── transactions.ts
▶️ Running the App Locally
1️⃣ Install dependencies
bash
Copy code
npm install
2️⃣ Start the project
bash
Copy code
npm start
or

bash
Copy code
expo start
3️⃣ Run on device
Press a for Android emulator

Press i for iOS simulator

Scan QR code via Expo Go

🧪 Building APK
If using EAS:

bash
Copy code
npm install -g eas-cli
eas build -p android --profile preview
The generated APK will appear in your EAS dashboard.

🔐 Authentication Flow
User signs up → backend stores hashed passcode

User logs in → backend returns JWT token

Token is stored inside UserContext

Axios attaches JWT automatically

Protected screens load only when user.token exists

🛡 Environment Variables
Create src/utils/env.ts (if needed):

ts
Copy code
export const BASE_URL = "http://YOUR_LOCAL_IP:5000";
📌 Screens
Each major screen has its own sub-components inside:

bash
Copy code
/screens
 ├── Auth
 │    ├── LoginScreen
 │    └── SignupScreen
 ├── Dashboard
 ├── Transactions
 │     └── components/   # Local screen-specific UI
 └── Wallet
📷 UI Preview (Optional)
Add screenshots of your app UI if you want.

🧑‍💻 Author
Faruq Hameed
Fullstack Developer — React Native & Node.js

⭐ Contributing
Pull requests are welcome. Fork the repo and improve functionalities.

📜 License
This project is licensed under the MIT License.