export interface FaqItem {
    question: string;
    answer: string;
}

export interface Testimonial {
    id: number;
    text: string;
    author?: string;
    role?: string;
}

export interface NavLink {
    label: string;
    href: string;
}