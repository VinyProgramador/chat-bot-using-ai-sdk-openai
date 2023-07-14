'use client'

export interface ChatProps { }

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useChat } from 'ai/react'
import { ScrollArea } from "./scroll-area";

export function Chat(props: ChatProps) {
    const { messages, input, handleInputChange, handleSubmit } = useChat()
    return (
        <Card className="w-[400px]">
            <CardHeader>
                <CardTitle>Chatbot IA</CardTitle>
                <CardDescription>Using Vercel SDK to create and learning a chat bot</CardDescription>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-[60vh] w-full space-y-4">
                    {messages.map(message => {
                        return (
                            <div key={message.id} className="flex gap-3 text-slate-700 text-sm">
                                {message.role === 'user' && (
                                    <Avatar>
                                        <AvatarFallback>VN</AvatarFallback>
                                        <AvatarImage />
                                    </Avatar>
                                )}

                                {message.role === 'assistant' && (
                                    <Avatar>
                                        <AvatarFallback>IA</AvatarFallback>
                                        <AvatarImage />
                                    </Avatar>
                                )}
                                <p className="mt-1 leading-relaxed">
                                    <span className="block font-bold text-neutral-700">{message.role === 'user' ? 'User' : 'IA'}</span>
                                    {message.content}</p>
                            </div>
                        )
                    })}
                </ScrollArea>
            </CardContent>
            <CardFooter>
                <form className="space-x-2 w-full flex gap-2" onSubmit={handleSubmit}>
                    <Input placeholder="Como posso te ajudar?" value={input} onChange={handleInputChange} />
                    <Button type="submit">
                        Enviar
                    </Button>
                </form>
            </CardFooter>
        </Card>
    )
}