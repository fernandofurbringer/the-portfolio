import furkanpicture from "@/public/pics/perfil2.png";
import Image from "next/image";
import React from "react";

export default function AboutImage() {
  return (
    <figure style={{
      position: 'relative',
      width: '100%',
      height: 'auto',
      display: 'flex',
      justifyContent: 'right',
      alignItems: 'flex-end',
      overflow: 'hidden',
    }}>
      <Image 
        src={furkanpicture} 
        alt={"Fernando Furbringer"} 
        sizes="(min-width: 568px) 90vw, 75vw" 
        quality={100} 
        className="rounded-lg" 
        placeholder="blur" 
        style={{
          maxWidth: "50%",
          height: "auto",
          opacity: 0.8, // Ajusta a opacidade da imagem
          objectFit: 'cover', // Ajusta o ajuste da imagem dentro do container
        }} 
      />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        //background: 'rgba(0, 0, 0, 0.3)', // Cor do gradiente sobreposto
        mixBlendMode: 'multiply', // Efeito de fusão com o fundo
        zIndex: 1,
      }}></div>
    </figure>
  );
}
