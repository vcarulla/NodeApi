module.exports = {
    port: process.env.PORT || 3000,
    db: process.env.MONGODB || 'mongodb://localhost:27017/shop',
    SECRET_PRIVATE_KEY: process.env.RSAPRIVATE ||
    '-----BEGIN RSA PRIVATE KEY-----\n' +
    'MIIEpAIBAAKCAQEAmq4hDio0SjYHhpOHXmzKoyNWp+09Cfurkzt/XFcJz9YpRHBj\n' +
    'BNS1HHrPyCHYVXuXQ4yWxC/C2xxbk0UYXH4XO+PxvMwiTiPcpwPWXVbVVE1ICots\n' +
    'gJU26w/KQZht62iKS95St2Msn0ISWosXR9RFU+eiXJm6SR4wNCkbFin22lE3Mo39\n' +
    '3HroAOJMo349awGllt/CK7tzCw6dSWfpdVehoU2L2RsqDBY6oItPfiWVRUPKzm2O\n' +
    'K3hNgV0rJZFWue+K/WRwXhK+HuvbEv5mrOOig9UOmHenrmmYHwSVXT3dNkQxF4J+\n' +
    'BSIkpG32+VGlijGNm1LtotyhUeVddVHym7+18wIDAQABAoIBAGS3dxyTDIM51QKi\n' +
    'syUfr340N2uWhQUoExsGRbKpleD3sN04VLFDkz4dFYhZyVQ36lF4jH7oHnevak1l\n' +
    'Uyx+icBcdv4Y6Ul5/mXdkMosDTIcNAlxqU+8WQsLuAWoLAJ5intGIxP4BokYa3z7\n' +
    'TkheBlpQ3B5xlqOffYGpNlLjNjIGZqfr30hpgGXBXDZhl9iA0qwtXqJTMYj+8sjM\n' +
    'JsFbeHgZq9vh3p0eH7so555Ir51pq2x7s75qrk6mZiYbYGMyRrMEI4ruDFtsv/I2\n' +
    'v9tQfI8Oo42fcLdVCauGyC4eXcW+sLQnvl/T5I0ObsgQyPxojSOXT/I8mJDoIv3d\n' +
    'MhtBuyECgYEAzSeKn+53fV9uQXw9wzjRpWmONpH2KwtU1ldBnmqGrCWBHoncpJdU\n' +
    'rcpsW93XTc+ioV5Y7kcYSOhpcQ3ppM7wALWNqXhrLl2YPc3n+/W79pGm7ZgJCMZp\n' +
    '6aIz05/wy8Pqa8utaHB4pJepav2bCz9FGj6SesIdSbk2Wvd1SsIuWEMCgYEAwQQk\n' +
    'GMnN098bi35riyeqw/IqxKj3qBduZ9fyI7oe8UAz2hUDMvr7UQSAkIOGtp9VaX7R\n' +
    '0rjJ+1zkB0kxSylqOpxWX+jzVB19hBFddTgxmdfrwEhQQE7CTHb4OH+Y0EWNc0iH\n' +
    'uPyt114B/yUp6tLUinhTsxzzhII8m3mVXMfB6JECgYEAj8sKR+TODasIzY92ftHh\n' +
    'Z64fhrIxt6Pel8la7d0+fYRgBvacFyUWriU2ZAGOujQxiidl78UXCWsVFK+qtuBw\n' +
    'qh6Wp1UG0t25KoCa/CgV0dHvDZNFqcfgTmhpKQhur3OnaFy/M3e5p6vBjIMq2+xB\n' +
    '1A5Nfwt1mcnehk3yAS8vap8CgYBqTVuMA2jGrXPAKcoVA6266R7A3MY4317A9l+3\n' +
    'aYQtHkzwaO4wH6ZWAoLEFIwW/D3QMjZhNcCYHZrAoIDzgkWtLfksLWIGC4/bMq0k\n' +
    'J+S5c/+1EJ6SLE46SrN+elexLP0wZtvI9/DOUkoLOW6Sk7bW5FpEpUdAzXGPtzCZ\n' +
    'vrJ+4QKBgQCL7kLwMx5HDVbuil5W0TDejBZw/zvO7ijWFXfacagcLhUX+SEcHYH5\n' +
    'E5UivwAK+DRcSmLe2aVQJnUlVVigR9Wn2Cc0xPP2JgmeYSkoL/cv22e41b3qH8nM\n' +
    'Zn6Zs4U8UG9JmtfadzZwMFrBS7dLaetIO812796yfccehBXGtEs1gA==\n' +
    '-----END RSA PRIVATE KEY-----',
    SECRET_PUBLIC_KEY: process.env.RSAPRIVATE ||
    '-----BEGIN PUBLIC KEY-----\n' +
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmq4hDio0SjYHhpOHXmzK\n' +
    'oyNWp+09Cfurkzt/XFcJz9YpRHBjBNS1HHrPyCHYVXuXQ4yWxC/C2xxbk0UYXH4X\n' +
    'O+PxvMwiTiPcpwPWXVbVVE1ICotsgJU26w/KQZht62iKS95St2Msn0ISWosXR9RF\n' +
    'U+eiXJm6SR4wNCkbFin22lE3Mo393HroAOJMo349awGllt/CK7tzCw6dSWfpdVeh\n' +
    'oU2L2RsqDBY6oItPfiWVRUPKzm2OK3hNgV0rJZFWue+K/WRwXhK+HuvbEv5mrOOi\n' +
    'g9UOmHenrmmYHwSVXT3dNkQxF4J+BSIkpG32+VGlijGNm1LtotyhUeVddVHym7+1\n' +
    '8wIDAQAB\n' +
    '-----END PUBLIC KEY-----'
};