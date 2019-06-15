개인적으로 사용하기 위한 설정들을 모은 Next.js 베이스의 boilerplate입니다

- typescript
- lint
  - eslint (airbnb / react / react-hooks)
  - prettier
- test
  - jest
  - @testing-library/react
- git hooks
  - husky
  - lint-staged
- absolute path import (with './src')
- polyfills (for inside NPM modules)
- environment variables(dotenv)
  - ".env.원하는 NODE_ENV 값" 으로 파일명 설정 (default: development, production)
  - .env.example파일에 정의해두고 다른 .env파일을 설정하면 그 파일의 환경변수를 강제할 수 있음
- analyze bundle

---

현재 작업 중
