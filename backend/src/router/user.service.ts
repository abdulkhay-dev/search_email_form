import usersData from './user.data'

export class UserService {
  public delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  public async findEmail(email: string, number: string) {
    await this.delay(5000)
    return new Promise((resolve, reject) => {
      try {
        let user = usersData.find(e => {
          if (e.email == email && e.number == number) return e
        })
        resolve(user)
      } catch (error) {
        reject(error)
      }
    })
  }
}