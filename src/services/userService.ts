function userService() {
  async function createUser() {
    console.log('userService');
  }

  return { createUser };
}

export default userService();
