import { create } from 'zustand';
import { publishableApiKey, serverUrl } from './contants';

interface MenuState {
    isMenuClicked: boolean;
    handleMenuClicked: () => void;
}

interface MainState {
    isMainMenuClicked: boolean;
    handleMainMenuClicked: () => void;
}

// interface UserProfileState {
//     getuserProfile: () => void;
//     userInfo: {},
// }

export const useProductMenu = create<MenuState>((set) => ({
        isMenuClicked: false,
        handleMenuClicked: () => set((state) => ({  
            isMenuClicked: !state.isMenuClicked
        }))
}))

export const useMainMenu = create<MainState>
((set) => ({
        isMainMenuClicked: false,
        handleMainMenuClicked: () => set((state) => ({
            isMainMenuClicked: !state.isMainMenuClicked
        }))      
}))

export const userAction = create((set) => ({
    userInfo: {},
    userProfileState: async () => {
        const res = await fetch(`${serverUrl}/store/ecom-users/profile`, {
            credentials: "include",
            cache: "no-cache",
            headers: {
                "x-publishable-api-key": publishableApiKey!,
            }
        })
        const userProfile = await res.json();
        console.log("userInfo", userProfile);
        //set((state: any) => ({ userInfo: userProfile }))
        await set({ userInfo: userProfile });
        return userProfile;
    }
}))