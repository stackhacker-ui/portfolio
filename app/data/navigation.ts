import { BookOpen, FileText, Folder, Github, Home, LayoutTemplate, Mic, User } from "lucide-vue-next";

export const navLinks = [
  { label: "Home", to: "/", icon: Home },
  { label: "Projects", to: "/projects", icon: Folder },
  { label: "Blog", to: "/blog", icon: FileText },
  { label: "Speaking", to: "/speaking", icon: Mic },
  { label: "About", to: "/about", icon: User },
];

export const profile = {
  picture: {
    light: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    dark: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfDB8fHx8fA%3D%3D",
    alt: "My profile picture",
  },
  meetingLink: "https://cal.com/emma-thompson",
  email: "hello@example.com",
  available: true,
};

export const socialLinks = [
  { icon: BookOpen, to: "https://ui.stackhacker.io/docs/getting-started", label: "Stackhacker UI documentation" },
  { icon: LayoutTemplate, to: "https://ui.stackhacker.io/", label: "Stackhacker UI templates" },
  { icon: Github, to: "https://github.com/stackhacker-ui/portfolio", label: "Portfolio template on GitHub" },
];
