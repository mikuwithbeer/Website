import { defineStore } from "pinia";
import type { Code, Codes } from "@/types";

export const useCodesStore = defineStore("codes", {
    state: (): {
        codes: Codes;
    } => ({
        codes: []
    }),
    actions: {
        async fetchCodes(username: string) {
            try {
                const response = await fetch(`https://api.github.com/users/${username}/repos`);
                if (!response.ok) {
                    throw new Error(`GitHub API error: ${response.status}`);
                }

                const data = await response.json();
                this.codes = data.map((repo: any): Code => {
                    return {
                        title: repo.name,
                        description: repo.description || "No description provided",
                        link: repo.html_url,
                    };
                });
            } catch (error) {
                console.error("Failed to fetch repos:", error);
            }
        }
    },
});
