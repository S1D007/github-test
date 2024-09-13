import api from "@/helper/api";
import { create } from "zustand";

type User = {
  id: string;
  username: string;
  name: string;
  avatar_url: string;
  url: string;
  bio: string;
  following: number;
  followers: number;
  public_repos: number;
};

interface Github {
  users: Pick<User, 'avatar_url' | 'username' | 'url'>[];
  user: User | null;
  getUsers: () => void;
  getSingleUser: (username: string) => void;
}

const useGithub = create<Github>((set) => ({
  users: [],
  user: null,
  getUsers: async () => {
    try {
      const { data: users } = await api.get("/users");
      const transformedData = users.map((e: any) => {
        let username  = e.login
        let url  = e.html_url
        delete e.login;
        delete e.url;
        return {
            ...e,
            url,
            username,
        };
      });
      set({ users: transformedData });
    } catch (e: any) {
      alert(e.toString());
    }
  },
  getSingleUser: () => {},
}));

export default useGithub;
