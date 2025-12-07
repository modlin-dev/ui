import { Heading4 } from "./heading"
import Button from "./button"
import Input from "./input"
import Label from "./label"
import { Muted } from "./typography"

export function Example() {
	return (
		<div className="flex flex-1 flex-col gap-8 p-8 bg-background">
			<header>
				<Heading4 className="h-8">Login to your account</Heading4>
				<Muted>Enter your email address below to login to your account</Muted>
			</header>
			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<Label htmlFor="email">Email address</Label>
					<Input placeholder="m@example.com" id="email" type="email" inputMode="email" autoComplete="email" autoCapitalize="none" />
				</div>
				<div className="flex flex-col gap-2">
					<Label htmlFor="password">Password</Label>
					<Input id="password" type="password" autoComplete="password" autoCapitalize="none" />
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<Button title="Login" haptics />
				<Button variant="outline" title="Login with Google" haptics />
			</div>
		</div>
	)
}
