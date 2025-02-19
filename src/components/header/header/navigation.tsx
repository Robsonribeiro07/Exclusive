import { Links } from './links'

export function Navigation() {
  return (
    <div className="flex items-center gap-12">
      <Links href="/" name="Home" />
      <Links href="/c" name="Contact" />
      <Links href="/about" name="About" />
      <Links href="/auth/sign-in" name="Sign Up" />
    </div>
  )
}
