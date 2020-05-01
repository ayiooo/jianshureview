import { createGlobalStyle } from 'styled-components';
export const GlobalIconFontStyle = createGlobalStyle`
@font-face {
  font-family: 'iconfont';
  src: url('./font/iconfont.eot?t=1588311527995'); /* IE9 */
  src: url('./font/iconfont.eot?t=1588311527995#iefix')
      format('embedded-opentype'),
    /* IE6-IE8 */
      url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAWkAAsAAAAACuwAAAVVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDegqIBIZ7ATYCJAMkCxQABCAFhG0HbhuFCSMRFpQWsr844MlQ44JQfCAECcPbgiY+HJrQanX+2/HQt3GJNp3WUP7nIMK6/6qn8wGsBJwg5S2PcOBfm+z9ttfrumS5hAQHimBA4mccQThHABzaUbO7x+Solx2cUZGd2UFpH0RQfclSHRfnPLBREWYo784efSHFbemA/udY6uXz5vx210gnlp00wPGABhTRuDeKBF2TToy30K6hOmgLwuugsyFAMHdyI5UPnyQQSCAawYbeOVkpEJixEg04oQxZsadB88GP8mbYL4F5wcfLZwpKIHgMRY5Sv+uhdChv/X2VdPz/OlrrJFDZdG7A2g8UyA0YkJmV3skaZXOj9HkLww8IpzDS6uq5bEFbzK72VXKOLLmALTqKBOHALaL/yQODMykGiSEQf0QbStj+uUCw/g4TBmwuJhRsASYCwBaUdtUVRTN+qCuGGobrViMTHvgqye+vNsjbIxpIBMkDchnRlw54BSMRIY7uxD9zkouEiEpoYGBcSHxoShqv0KBYCYqXRXZnZewsxc0KTJ1EPk3acq03GANqmipQp7Fvs1hiBiHWPA2G93tb1AWRnqYQ1lcvmoOpK7yhFFZKiyrZzMOlhHIxutwqi05jlV4Osr3A28aOty9iXgTl4ZjYvtloJCw65QZuBtpCd1HTa6ue83rUtJNenIK5rtn8wLIq2R1jac2kJErRZrOH9jaL+gJjeFpc4tK6klskHZy+IiI0IsyRCY0j9/VxrYks4/fUMaX4kxOTK4y42dDMqIP3JZGacZbXW81Gko0tDm9C6+i1pCeI8P7QtCaUPDYVFt3Ti5tx2qSIjOvvI6hueukTzjRN/Trw7evLkJDgkJfjpNh0/Pgm6hpZtJ6gQqz/9OgmAdOjmgahXeNcNK6UlJzyMvPwhad27jzFO5/OND3TtfYdwqMbyJbxxZUCBZyrrrgQ1CvvQEF6esbzK106Hw7NDCUq5hxx9a92+xbl5bwYxtuviPNdq73LXvldl3DHK+meZetRu2Jqzu6H5k/ZQUWPiuez/Cqs7resaY53G1xr7/Z3bZsVvUiK+52c5XuWtFBifvzRo31zDt7vrHh5bQWrHNOmK5LQ/qLltnqpnWmazPq7zSpGR0eyymaPVjgs9kX4JwjbtKDquq7ta7YZHrCtwSzbbbn4sjBH/6gHpeqfO7zo2fQAp+aS/X1qfKqWuMwcC2gWGqENc+F1JfcuGIptEx4Z5LdsphX3e72r+7peRZ7YHUlKap11+fffoOo2i1HJS5Uq6ZN5RmyFp0WKPKVf+i1QO01t+rFJ7VlJt4Ox7d7bHNEl84cucKIwbDzIk2ioFwZuvAunDnAT/LvmA87pXQXcI93szHZ/3Bjjp5MAd8YfaKUP/FoUju260y6i9LdA/B9IPLn9wBeMdJd+anWcZR9vs6EB8Ud5UYgtyJxmccTd5VNUEcSJP6Y9IFiD4CgYzYtpjXEfCrdQGZkFHpMbKMUDabBv8GPnA/4UJwTzotr+IVwYiCITBORkCoBY7APj4A/O4joysM9hcOUrJEsUmq/EHHHnKdvs6dYg61ACn8EKqpTt6E5h4xt1X7AmrQgof2xam4Asb/584YUVNlNs0w467zoFqqESnnA+LAqC0JBD0cWm68I5yde16pZiQeXiRKUGWYcS+AxWUKW8+btT4f3fqPuCNQ0Tz4J/bFq7eMjitAPypa06TdxKezvovKO0AmXVUwlPcmOhWYJQvZpD0cVmQDqcE5pLddXGy+vLx3oB0MhVNzG5QkOpqdKmJrBD09AY9eEg/aWqgphccbu+SFjqwk6KVVoyZ43l963p2WSrvWRkKiyLBQAAAA==')
      format('woff2'),
    url('./font/iconfont.woff?t=1588311527995') format('woff'),
    url('./font/iconfont.ttf?t=1588311527995') format('truetype'),
    /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url('./font/iconfont.svg?t=1588311527995#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: 'iconfont' !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-arrow-up:before {
  content: '\e743';
}

.icon-download:before {
  content: '\e69c';
}

.icon-bi:before {
  content: '\e62b';
}

.icon-Add:before {
  content: '\e606';
}

.icon-Aa:before {
  content: '\e636';
}

.icon-fangdajing:before {
  content: '\e637';
}

.icon-shuaxin:before {
  content: '\e631';
}

.icon-daohang:before {
  content: '\e632';
}
`;
