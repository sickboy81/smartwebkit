import React from 'react';

export const Card = ({ children, className = "" }: { children?: React.ReactNode; className?: string }) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white text-slate-950 shadow-sm ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = "" }: { children?: React.ReactNode; className?: string }) => {
  return <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>{children}</div>;
};

export const CardTitle = ({ children, className = "", as: Component = "h3" }: { children?: React.ReactNode; className?: string; as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" }) => {
  const Tag = Component as keyof JSX.IntrinsicElements;
  return <Tag className={`font-semibold leading-none tracking-tight ${className}`}>{children}</Tag>;
};

export const CardDescription = ({ children, className = "" }: { children?: React.ReactNode; className?: string }) => {
  return <p className={`text-sm text-slate-500 ${className}`}>{children}</p>;
};

export const CardContent = ({ children, className = "" }: { children?: React.ReactNode; className?: string }) => {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
};

export const CardFooter = ({ children, className = "" }: { children?: React.ReactNode; className?: string }) => {
  return <div className={`flex items-center p-6 pt-0 ${className}`}>{children}</div>;
};