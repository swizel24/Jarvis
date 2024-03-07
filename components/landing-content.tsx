"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "J.A.R.V.I.S. V 0.1.0",
    avatar: "1",
    title: "Simple HTML CSS app with embedded Gradio Application.",
    description: "This website is hosted using Netlify, and the Gradio Application is hosted on Huggingface Spaces. The Huggingface App is then embedded inside a static HTML page using an iframe.",
  },
  {
    name: "J.A.R.V.I.S. V 0.2.0",
    avatar: "2",
    title: "A Full Stack AI SaaS.",
    description: "This app uses Tailwind CSS for design and animation, offers various login options, and provides functionalities like AI-powered content generation and music creation. It also features a subscription plan and handles data fetching directly from the database. The code follows a standard Next 13 structure for organization.",
  },
  {
    name: "J.A.R.V.I.S. V 0.3.0",
    avatar: "3",
    title: "All in One AI System using Streamlit and Python",
    description: "NOTE: This version will be Updated and Deployed Soon. Thank you for your Patience.",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Project Links</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}
