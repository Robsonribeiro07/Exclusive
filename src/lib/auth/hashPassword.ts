import bcrypt from "bcrypt"


export async function hashPassword(password: string): Promise<string> {
    const saltRound = 10

    return await bcrypt.hash(password, saltRound)
}

export async function comparePassword(password: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword)
}
    
