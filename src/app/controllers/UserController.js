import Queue from '../lib/Queue';

export default {
  async store(req, res) {
    const { name, email, password } = req.body;

    const user = {
      name, email, password,
    };

    await Queue.add({ user });

    return res.json(user);
  }
}