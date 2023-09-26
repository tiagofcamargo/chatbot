'use client'

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Input } from "./ui/input";
import { useChat } from "ai/react";
import { ScrollArea } from "./ui/scroll-area";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  });

  return(
    <Card className="w-[440px] shadow-2xl bg-slate-900 shadow-red-500/100 border-none">
      <CardHeader>
        <CardTitle className="text-slate-300">Sato7 Chatbot</CardTitle>
        <CardDescription>Usando Vercel SDK para criar um chat bot</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] w-full pr-4">
          { messages.map(message => {
            return(
              <div key={message.id} className="flex gap-3 text-slate-400 text-sm mb-4">
                {message.role === 'user' && (
                  <Avatar>
                    <AvatarFallback className="text-slate-800">Usr</AvatarFallback>
                    <AvatarImage className="bg-slate-300 p-1"/>
                  </Avatar>
                )}
                {message.role === 'assistant' && (
                  <Avatar>
                    <AvatarFallback className="text-red-600 font-bold">S7</AvatarFallback>
                    <AvatarImage className="bg-slate-300 p-1" src="https://sato7.com.br/wp-content/uploads/2020/06/fav-150x150.png" />
                  </Avatar>
                )}
                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-300">
                    {message.role === 'user' ? 'Usuário:' : 'S7 Daileon'}
                  </span>
                  {message.content}
                </p>
              </div>
            )
          }) }
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input placeholder="Como posso te ajudar?" value={input} onChange={handleInputChange} />
          <Button type="submit" className="bg-slate-700">Enviar</Button> 
        </form>
      </CardFooter>
    </Card>
  )
}