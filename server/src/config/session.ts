import Keygrip from 'keygrip';

const keys = ['secretkey'];

const sessionConfig = {
  name: 'session',
  keys: new Keygrip(keys),
  maxAge: 24 * 60 * 60 * 1000
}

export default sessionConfig;
