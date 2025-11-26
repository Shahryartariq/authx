
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,var(--color-sky-400),var(--color-blue-800))]">
        {children}
    </div>
  )
}
 
export default AuthLayout