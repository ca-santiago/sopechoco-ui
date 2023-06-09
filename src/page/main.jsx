import React from 'react';
import { CgPin } from 'react-icons/cg';
import { MenuItemsList } from '../data';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importamos los estilos del carrusel
import { Carousel } from 'react-responsive-carousel';

import { FiPhoneForwarded } from 'react-icons/fi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

const images = [
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFRYYGRgYGBgcHBgZGhgaGBUYGRgZGhkYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzQrJSs0NDQ0NDQ2NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDY0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAMwA9wMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAECBwj/xAA5EAACAQIEBAQFAgUEAwEBAAABAgADEQQhMUEFElFhInGBkQYTMqGxQvAUUsHR4WJykvEjM0OCB//EABoBAAIDAQEAAAAAAAAAAAAAAAIDAAEEBQb/xAAnEQACAgICAgEFAAMBAAAAAAAAAQIRAyESMQRBURMiMmFxBRSBUv/aAAwDAQACEQMRAD8A9VmrzUyYh5k0TNzkyEB8efAZVKVAsbAf2HnLTjz4DK9RrBRa+usFxtjIKzT8ONtj2Gv3gvygNfYwtsWLyHG4gOLHXYwpQdWmM4ELVlWC1eJKNM4NyX1m/kLM/IGibDYp3YbCOxEeGSzi0dgw00+imdTdPWc3m0OchAtDlObzSmCY/GhFJ3G0ouMXJ0g286BijhPETUBuLHpGt5ZcouL4yJQZsGRgzsGRAkoM6EhBnYMshIDN3kLvYQVi1iS1pLKDKtdVBZjYCVzi3HObw0zlu39pBxfGZFA1xuf7Su1Km98pqw4k9sROdaRmJqXEEo1OZCL6Gd1HvF9Grb1Yia0hDYyR8rTmo0hR5K+cKiiHnsZk4rJaZJRD3OaJmpk5hrsy80ZhmpCAuP8AoMolesVcg5DbuJeOKtamx7GeTU+Ml2CuBrYN0PftKd2OxSosf8R3nD4oZRNVqEbyGniesJM00ixk7jf8wjDYVn+kZDU7D1MUYDE81lG5lpSqFUIDkPudye5i1iTl+hTjshXhRBB+4II9QJM6lTn7iYmLg2JxN94xwilorgEc06pnOQA5A9ZJTMS9MCgtWlQ42zLVuxytkNpZ2qWgOOwIq2JXSRJsdgyxxyuXQp+H3LVSw0tLdeLcFggn02EOL2Gctxa7Kz5VklcSUGdgwT+KGsxcVfQShIcDNgwKlXJa1oYJEQgrIW6+kT8fxjUlVdObePhVVQSTaU3jWKFVyToMhNWKCdMTOVCHiCs4+ojpaBYWsVPI+Y2MNrXTPVfxI61JXW/qO02JGZnfL/iAY1OUDuwhWGqcw5T9QgPGatgg/wBQh0CGtlJ6TyJ1uoI6Tmk+ecuirJKg2mSd1uLiakoqz2aam5yZzDcZeaMyYZCgLi3/AK28jPEMNhzUZguxM9u4qf8Axt5GeP0MVZslsSbXHnBl+LrsOIWFJQX1Ase/nAKj21llp8HcqGB12gGJwoQkcuYlJNLY/HO1QLwXGlKnMwspUrc7E2z+1vWPquPtmTK1XUmCtjXQWYcyj3A7dZG2+h0Wl2W6nxC9iDOqlfO0rdHFggMpuDoR+8pIeJBe5lKT6YTp9Fyw2IHLmekZJht7ylcMru5HN4V6bmXPAVuYcu4/ENRUuzLli1tEjYeCY8siFr2tvGFSoqi7EAd4k4hjhUUoAQp/UdT5CHSQlKUgPhoqB+c1C6nbaNalUsMoswmH5BZSSD12i2tiqiuVY26dCOoMXKLkElxLQiZWvJlQDeVqjiXI+owj5h6n3kWFguZYKfIpveSti0G8rweQYrE5EDWHHBZTma4jjmdyRpoBFT1Sds50zW3kbAjfWboQSVIzSk2cs4ItAOTlPL1zEMY55i/eQ16YOkYkAxfialjzDJhqOoi/itTmZLdow4mLIToQIlqvdkHlIwS10RdPSC1V5YZg2yF5zjaWV4VaI2SYVgy2mRfhK3KSDMkIe3LjUOjD3gnE8dygBDm18+w/7nncKw2JIuCTOTZ6Kf8Aj1CPJO69UWV+IuNHPvMofEDKbOOYdRkw/oYg/iwcpxVrXkf6M304vtFwxuNSpScowPhOWjDLcTyjh+Cd38Ck2N/vLB8yC4Z3pOWokXOqNoe4O0XJutA/SSLJhGHIBfMDPtaKuOlRY31ylV4hxurTclgVZySQQQD1tsfSP8FSWrTDvclo3coiE+EtCetWGxvIBhS48Wn5jutTVX5R0v6SNrbQHo1RakrKyyCi+YujHP8A0/6hHNDDJ9S27HXKRY7C86nfpBuD4GoAQD4dgdvI9JdWEvtHa1bDKH4biOWtsrXGRESvhag/T7SI0XOViPaTZHTGT8RZ+UE6AX840wtMkZytYakUIzvY/brLThqlwIK7I1rQbTS0G4jhQyHLNQWU+Wo9pPzzbm41/ZhpinGxJh2uMoUDFJFRCVsMjbt5wrCV8/H/AIjHNIzrFJsKrVdQIE76Wjg4RGGmu4ygOK4U6i6eIfcR2LLF6egMmGS2ti53sZA7HcZTHvexv+DOGPWakjKyNnGl7QevTY5q2e0lqEb+8GrIV8Sn+0IEW4/GsVKOLNsdiIBhjzVB2E1xPG87AEC43nXClu5MFu9BUW3BtpC3S62izD1LWEZU2uIcQGKMWnKbzUOxlO8yVRLPSD8Kp/M3vIz8Jps7e8sAxSH9Qm/4hf5hORo63+7l/wDRVMd8KNy3ptdh+lsr+R2Mq2ID02KOrKw2YW9R1HlPU/nr/MIPjaFKqvJUVXXvqO4OoPlJr0BHyN7PMGxY/wAdZNg6erHU/YRrxX4WFNvmUmLp/ITdk8v5h9/OKwZGPjNSVokxHLazAFTsQCPYwjB2QBQtl27RY9XmYL3vGiDYyla6JKMZLYh+JMVyVVcZW+4vmIUzD3AI8jHABGRsRtcA/maaiGtoZb2VFcRQqc2QB/p7xzg6SqLWmmS0garYwloJ7CMSQNIsqODJq1W4ius/KbnS8ptsJIICXheCrWFukXisCMjYTrD1syRmOu1+l4L0XVj1akIoPfSD8HpB3PPou3WWCrw5SLoOVhp08j2joxtWKlKnQvTCI3OGAuy2uRmMrAg+x9Ip4dgbuQ4BKsBYmyAk2Bbc+Ue8Vp2pc48JUjmHY5GKmRedLNYOyXPqACPtMeRuMqHY0pKxzj+Fph1Uc55m0W9xbO9ja+Xh16yKjUm+Zq/P8xlDp4Rc2uecqgHck/fODIrKSrCzKbEdD6R8ZJ7SEtNabtnPEOGJUzHhfqN/OVLHYZ6bcri3fYy6l7RdxJFdSreh3Bj8eZx0+hGTApbXZTa1S3cbxbjqwVSVe19jDMUChZDt+IIOFvUT5jiyA5dW8u0281V2YHFq0Vux5ixjbhlOy36wTEpdzbrb0jPDLYQY7I2Gq1hDsJiotUmdoPMRqBLApDCZFuHxJGpmoVglzrt4jbrIy56mZUOZ85GZ5OTuTMUntnXzD1PuZr5zfzH3M4vOWMCwbZKmIYHNj7wHH4pXYjkIb+dd/MbySscpzw2sqvmbi282+PJ8Wb/FyuKr9guGocrXa1zoe0Yh4nx1c/NcZAXuIW1NlQVL3H4j+XR0sfkRk+L7J6r5gDW8LTwwLAA3LMM9gdhGFoaNRy73i/EpC2BGc4YAyyC8nKBvT5zb9I17npGJpF25V13tt5xrhuFIg8V72/dv7wZSUS1+xBhqas3K7aWFgcyen2jevhgF5VAVQM8vxCsZw8Op+WqhwMmzyN9zBMNSxHLauqgj9QJz6XAiG23bC5JrQZwoAAOP9rf0P76y1YY3Gf8A3KTSFSmbgAg6rsf7GS4nilblzKU0yBYnr++sfDMorYqUHJ6HHxLxFOQotizkKRfa45vYRcGYL4AvMqmxsDmQQbX7X8oB8gLZ2JYkam3TpoBJcEqludSCXIJIzuLeHPyItMmbI5PkasONJUNHZK45lQhnUsyAsArLl4V3LWG2RzyzguGUqMxkSQD3Gs2tT5bM4JsA1iMuW4ub/ca7yHHY0HksRYA6AgXJuTnnnGY5cnYOSHFUuiatWsImx+PAvcyehTeu1kyXdzoPLrLFgeFpTWwUMTqxFyZpUWzHPIo6XZ59wvhz4yuTyslJcmZgQX7Lf8x78S01VeRSFVVyXKW+wGgA8pRPi6tap6Q5cmkkY8jffyUupTse8IwzQWrVu15sVxNsNITLYzQyQEHQxN/FOfpEwCqTpDsCh5bY2mROKdeZLslHp1TU+ZnBndb6j5yMzysvyZz32zVpyRN3mjFgguM+kxNjaDoA4va31DYx1ivpM1xTPBP/ALZ0PBjybTNeBXaKxztfmNz3jThvEnqI1ALe+/STcIwyPRXmEaYDgvI/zENh0mqWNcq+DZHFKNSvsiwiOihXzI0PbvGCPBuJoShKmxAOcCwOKZhbw81s7/m0p6ZuxZF+L7HRAtnAnpFyAuQJtfc+X95JTW+bm9tthDMGOa7nIaDXKVOfFGhL2c4R6dJghIuTa46n96w3EAggHX+m04wuHTxFgLnc7eUWcZ4fVfNKrIAQeVd7bHc3mdN+y5VJ6Ga32vNsp3vAuC4qoxZaqBStrMCeUrnY56kQ/E1h4bEXbvr0tKckiuDs5CdYDj+Fq9ixIANwB+o9+v8AiGpV/TkW6X+47QfGU+dgS22g/fYe0CT1YcE1LYKxUjkUAkDlKnOym4z885IlAACwsNMssibAW2t/SZSwAVibm7EE7+mWkJICjy1NgMhlYRbH8q6BFxQR+Q+IfqBF7jLO3sYNjcMroq08yraWuxXK4vrv9opqvUq4nmCsiIxsTcBrgggDcZj92lheg7NTZFyRSWZb84IIFuXcWB66xsYtVTJNqUWnq9WM8MQiAAAAATTYps5uhT50LE+G1wba+kECa56mdODTVnFmnF0EVMSwnnfxdiiXbLQT0CuM7k7SifFlNSbk2P5hUr0Lb1spbVG6SSnUt9SzdaiwNr285D/DN5xyfwDQQuIf9P2hVDDVWzLEDtrAgjaWIhFGpUX6W9IafyC0MFo2FiGPmTMnCcTqL9SAzUK0DTPS8SPG3nIGhGO+tvODMZ5bJ+T/AKznT1J/0yRzotOSYsAixGk5rnnw7INwZ3UW+U7opYcs2+M3G5I14eUfuQBwygyoo6S10F/8fpAKNEWjSmPBN0XbbOu6pUJ8QlqbX6GI6FCw5hrH3EWsh7wKkgCjygz7QMF97ZLw9GduU6b9x0jp8NbJcx06GLeEVBZ22Jsve2X94PiauK8XIwVdBuwvq1+2czykmzeoyqrHaZTupmuY1gGHqMqLz/VYX7nrCC5MC7K4tGkp6eJuUC1r3vluTmYNjKbFSUADhSEPS4htzkT+JHVfLPIX9feR0FFuyp8C4RVSs1Wo5ZtAbk8wPW/7zhnxBjXQXQEubi4t4B1z1/xGy1lF7D73g6sDckXv+9PWDKdyTYxRpNIW8ExGJfOqAEsPEbhyRvkd+mUsWH8YPhtnmNb9IOlKwtfw29jfLyE5q4taVkFyW9MgNSeloLknK6LS+2l2SY7DAHwAXXXqb7/vrCuDYpeV2Ng4O5sTlve9vO0X4jiwuAts9+u1yZJw6orEWGZ269R++kuMlGSaLcZOFSG1DH0HpuhbkZXC8isCWGwW4FxobdtcomqU257Le1zYnW3eNqCUkrFyih+UnnbPIWB10yNr9rdZHVRQzuroV5yLCwAtsul7dRN8cjW30c7LjVOu+xctB2Gtu85HBaIbncczDdtB5CFYrFKilmMqXEeNs5IU5SnklN0jlSyN6FHxPyVKrFQABkLRCMGf0sRGNVDe5mLQOs1wVKjQlSA1Wsu9/OFYbFDR0F+ohiU7idHCpqSBG7K0S0URhkR6zJArIuhmQwS/Ytrux7wdjCuIizmBmeYyqpNftnNyak/6anJnU5MWAbQZyaqtmBkCaiF4lMhNnj/izdgV4n/SenpGCfRFiaRko/8AHN0DpJ3FMQ8Vq3QAdYsrVmYco/Vl6bx3XoAiRYDDKHJblA5beL3NvYRc+rG4opSs3QWyrY9IZQBy5td/OBYrFImrXvoAPa372gScaTn5SSp2uMm7iZ46Nkk3ssb2It+/KcKBvsL3+2s0tdANdcwdJAcSpJW/pfM+nSVqwUm0SVXbmy+m2u/lBsU5sAMvMX3E6fELexyNuup2kGKqW0Hnn19ID+RsU+qB6jkGwNj1/e0GxOMVAt9XcAAZ3udSL6awTEVHZxZgF5bnW/MctBqJ1gBkHe172vYe2WYsCNesJRVWw7fQ7etZd7gXvrfyiHF4tmrBV0IPi6aZad40B87WN/eK8QLk2sBlmen7tAjV7Ca1ogeudB5Ab6xzwOvZwWtYW94m+Rve5G508h3jLhtIq1yLDX/EKVJWi1tUy11sIruviKjmDcwLbA2Frjrp2hOEoPUpOHA+YoyGbWW+V77nlJ7wWgSyKb5jfbzjjA10B5wAWZQp7gX8JPqZoxSvT6ZiyRdWu0effGWFdQHDDk0Zb5qb2y6j8SrIptcT1rEYGniUbmpEMh8QKlkJzHNbQje4tlPPaPAcQ7OlFOdVZgH+hX5TY8quQdcv67x2Olo52XxksnKK/q/YlU7GdBwJFiFZGZHUqymxVhYqehBnKXJvNkQJE/zmOk4FFm+o2naPbaTitlHJC2Qrw5esyECrMhFHomJRWa5nApL0ENfFU/lhRZjbXv1vBFA6zkSjFtuhrhG7pHLIvSQPhFOmRhAcA/4mzVEFwi+0DKEH2hOQVaxBhFSsGGRhDG5veQVqKNrkeolRhGKqJUYqMXGPsIwq3WMB9Fovo4VkTmRyxB+nLTtI14wBk6kGNi+PY2M1GKi3QW6ZQf8Ahr6iSUMWj6ML9DCVk7HxkntAT4JCbsgJE5fhaGxCgEaZA2jCb5tpXFDOUl7FGIwjr+m9txcj/ETYrhxdw5uGUm9j9Qtod95eEFhInwiPqtu4yP8AmA8K7Q2GdrTKk9Y7jT3EjfHXy8h23/xLJieE6lDfLJTYH/lE+L4O2vKd+mne2Ri/oMcvIj7FdBwQQ+tjba2eXpv7yUKgNxnbMaeWnWRPgy2oKsB9Q8QYbEEG+naD1qbquS+MD6bWLdQDpf8APrJLDIZHJEMrY5RqLd/XL7SOliUKjkzsdb/vOIeIfNK3Cm98wQQQthtvr6SfgpZUs6+XcbaaypYnGPJlrInKkOlvnlqc97Zwym5yG0DpVL/TvtBzWZWHNmPe3Y9omgrstPDcbY8p0MnXiPy3Kut1Y3DC9wL5jz6SvJiTqL2jam/zk5bgOOu47/aXFvpf8KaSdvr2WhOK/LpB9RdRbMNykgEjuAZBwjitJSVK5Kz8pbwtmxIUiw3IGcq2FxjIwLrz8lm5Scjy7m/Q5+ggeI4qXxBZBUCVUXnQ3co1wzWJ/TcXF9x5TTGcmr+PRnnhV18+yzfHXA6dbDPieTlrInPzaFkGZRuosTbpPJkf2nt9MNisFUpKCpemyKz6G9wL2BOW88P4ngXw9V6NVeV0NiNiNQyndSLEHvOhhdxs5uaNSolHYzC0gpvCqT3mlGZnIuZklCi+s3LIXPh1fwhWtl3jFX/dxIsVw75NT5brcH6SB9S9fOS4rDKhsoGmu58xtOVJU2FHklTO7Ht7icujfy/f8QvAcPLLzllUHTIEyHieG5CLPzk7DUe0qnVjPV0BtUCn6Wv5ZDzMGxeKa9kIPp/WNKQLcqslgP1HKCVClyq5i9r9YJT2gBcc6frEITiqn61DeYguIwOdgR7aTj+AIIsVI32MKxVsMfFUDpTse2UlpY5FHh5r+eUWvhW5iEW4vlmJy1Fxa6mQilKO0h4eJEEeG47QvDYtDvY95WUqMOs6V+8tFryZLsuPzFtrNhpUUruNGhuH4uyizC8IbHyYPvRYargKSYImIizGcYVlChSDf0kFLE33icrafRm8nKnJKL0OmoU2uzKMhmdL+2sT1kQnTIEnuNsj5QqvW8AUbwFmj8cmomR+Xkg/tYK+BAPhIZTqjZWN9QTb3Fj0gyYIE2BcMt7Kw5Sd7K1uVxvlaMbyJ6pX6SQexIh/SU1s0Q/zGSP5JP8AgB8lgb26g3FgD0Pe+2U5CnW39v8AqGtxd1+rlcXvZhY/8lsfzB6OJVySiMu5FyU7kG2R7GZ5+LSuLOp4/wDlMeV10zZTK40I9pJh6xQgg/4NpM1AsPCcx+O9oO+EbXprvfymeWGS9G9ZYv2PGKVUB0YZZa3/AHeD8HqrTcAKFOd75XP/AFaL8NUKm4NwdjlbaEY6mrDnUEMvnsMr57G+320jtq/aCi0temXzh+IQAcrdR1BN72+8SfGfwpRxiLVRvl1EQ5qgYMLglX0LWz5RcW5j1tK1w7jL02KtysCdNr9V6SxpWOJpFA5pjmszDxZW0INjbMZzRj8n17M+bxa+5bRQeM/CT0aK1aNQ4gc1nVKbcyDlJDnlLeHIg6WtvfKupiZ6rhqNbDO1O63emQCt2SzggG2V7EHKePYvDPRc0qqlXSwKm1x00JHsZswZnJVLtHPy4+LtdDP54O0yK1qzJp5CKPob4iIRVe1yCV9CNjK0XT+VvVo2+L8WLpTBzzY9hoP32leUzn5n9wyUgtyh0LL1Go9DOKbqh5lBJ2J09pErZWmjFWByNu5IN2Nz+zIVWzKdhrOnM4xDayFNkdTE3ayj3nBxNrXEkw2AqVPoQnvoPcxzh/hdyB8xwOwFyPUy6IoyltITJVBFxr03naMr75jrLFS+FqSm5Zz62/EMTgNAZ8gJ6m5k0GsMimvRtuRIGpnreegjh9PTkW3kJicMp7U1/wCIhR30VLA/k89Rf5r+kwJfRvfKeinhFI6009hIR8NYe9yl+1zb2j44ZMU8P8PPXRh/ibp4Wo30I58lM9PocOpJ9KKPQQpVA0EYsD9sn0InmtHhWLP/AMmt/qKj8mMKXw7iWGaoPNv7CXubvCWGIL8aD7KanwpWP6kHuZjfBdU//RB/+Sf6y5q0lDQuKSor/TxfBSaHwIBm7hz0sQvtCMR8KVCvIroq9ApEt95l5Sik7HwxwjGoqigv8FVhmjp63/M5f4axqjL5b9mJYH3AP3noE7BhN32i0uPR5i/B8Vo+GP8Aup1Ff1sxB/MxuHPaxV17Mpt7EW9p6dMIiXihL0PjmnH2eS47AIVzXTIndT5dJHwWqUcoSCp0O1tJ6jjcBRYczov+7Q+4lcx3wVTqDnoVWQ3v4vEp9rETHl8Zp3E24vLTXGZG6gjnUi625SQDbqDfVZSv/wCo4dXpUa3h51bkBUKedSCwu97hRZjaxzbaWPEcExdI2cF06p4h35gBzadRB2pUq6Gk6jk6XIIPUdCIqOR45LkqGSxxnB8WmeLZiZLB8ScEbD1XUpVWmG8FR0IDCw/VYA53E1OotqzlPTouOG4qa1V6juvM5yA5vCNlzGwjZAJUuCfWJbkmKfZmxzclswr2MwiH4SgG+q59dfOMaS2pM65EWyFgNeuv3lJWMEQwbnRH/wCJjzhXA15Q9TM7Jsvn3kf8Ud1U+dz+TLHToqoHKALgE262kaSVjMUU2RmnYZZCazhAlH4ji3+ZUHOwAawAJAtESlRshC3RbWxABsfXtCVpXzvKJ8NYx6gRWOVRvERr6E3tLP8AD9VjzqSSFYgX2HSPwyi+0FkxOK0xylMCbYQetUIYW6H8TrDVCVudZuhKPSRlaJJgM3NCOTAaN3mXmKJ2okso5AmwhkyyRYLZRAKZnS02hE3BcmWQ8khxhKoWG0Mg3EP/AFt5f1gyk6KE44g/b2nQ4hU7e0FkqTJ9SfyWEpxU/rXLqIbVx6KnPe47dekUNoYDV6bQo5pBJWwitxH5h1sOkyhiGXNTb8QWlTElZADlEfUk9jXFDOjxgg2ceohrUqVSzlUY6hiASPXWVg56zmqxX6SRDWf1JWXGNvRcyobUA+cyVajxKouje+cyafqIDif/2Q==',
    'https://img.restaurantguru.com/cfdc-Restaurant-El-Sopechoco-interior.jpg',
];

const MainPage = () => {
    return (
        <div className="min-h-screen">

            {/* TOP NAV */}
            <div className="sticky top-0 z-40 flex justify-center text-center shadow">
                <div className="flex justify-evenly w-full md:w-3/5 rounded-none md:rounded-b-lg text-slate-600 border-none bg-mainbg p-2 text-center">

                    {/* LOGO */}
                    <div className="flex items-center">
                        <p>Icon</p>
                    </div>

                    {/* NAV */}
                    <ul className="flex gap-4 items-center">
                        <li className=""></li>
                        <li>El 2</li>
                        <li>El 2</li>
                    </ul>

                    {/* CTA */}
                    <div>
                        <a href='/menu' className="hover:scale-[103%] transition duration-150 flex items-center gap-2 rounded-full p-1 px-3 border-accent border text-accent font-semibold justify-center">
                            <MdOutlineRestaurantMenu size={16} />
                            <p>Menú</p>
                        </a>
                    </div>
                </div>
            </div>

            {/* CONTENT */}

            <div className="h-full">
                <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-2 px-10 pt-10 md:pt-0">

                    {/* FIRST COL */}
                    <div className="w-full flex">
                        <div className="m-auto flex flex-col gap-10">
                            <div className="max-w-lg">
                                <h1 className="text-5xl text-slate-700 font-bold">Sopechoco</h1>
                                {/* <p className="text-slate-600 mt-2 font-medium">Descubre Sopechoco, una deliciosa tradición de 10 años en cada bocado. Sumérgete en la autenticidad de nuestros irresistibles sopes de Balancán. ¡Sabores que perduran en el tiempo y en tu paladar!Sabor para toda tu familia</p> */}
                                {/* <p className="text-slate-600 mt-2 font-medium">
                                    En Copechoco, te invitamos a probar un pedacito de Balancán en cada platillo. Nuestros sopes tradicionales capturan el espíritu de esta hermosa ciudad tabasqueña, donde la familia y la comida se entrelazan en armonía.
                                </p> */}
                                {/* <p className="text-slate-600 mt-2 font-medium">
                                    Somos el legado de 10 años que alimenta corazones y reúne a familias. Deléitate con nuestros sopes tradicionales de Balancán, un verdadero tesoro de tradición y sabor que te transportará a cada bocado.
                                </p> */}
                                <p className="text-slate-600 mt-10 font-medium">
                                    Somos la herencia de una década nutriendo corazones y uniendo familias. Sumérgete en la delicia de nuestros sopes tradicionales de Balancán, un auténtico tesoro de tradición y sabor que te transportará en cada exquisito bocado
                                </p>
                                <p className="text-slate-700 mt-1 font-bold">
                                    ¡Sumérgete en los sabores auténticos de Balancán y experimenta una tradición gastronómica inigualable!
                                </p>
                            </div>
                            <div className="flex flex-row gap-5">
                                <a
                                    target='_blank'
                                    href='https://www.google.com/maps/place/El+Sopechoco/@17.8050984,-91.5371666,17.33z/data=!4m14!1m7!3m6!1s0x85f3c28a773183f5:0xfff8874f50895109!2sEl+Sopechoco!8m2!3d17.8053598!4d-91.5371032!16s%2Fg%2F11fy4t3914!3m5!1s0x85f3c28a773183f5:0xfff8874f50895109!8m2!3d17.8053598!4d-91.5371032!16s%2Fg%2F11fy4t3914?entry=ttu'
                                    className="flex gap-3 cursor-pointer select-none"
                                >
                                    <div className="flex items-center justify-center gap-2 rounded-full p-2 px-4 bg-accent text-white font-semibold shadow-lg">
                                        <CgPin size={22} />
                                        <p>Ver en el mapa</p>
                                    </div>
                                </a>
                                <div className="flex gap-4 items-center text-">
                                    <FiPhoneForwarded size={18} className="text-slate-800" />
                                    <p className="text-slate-700 font-semibold hidden sm:block">123 456 7890</p>
                                    <a className="text-slate-700 font-semibold block sm:hidden" href="tel:+521234567890">123 456 7890</a>
                                </div>
                            </div>
                        </div>
                        {/* TODO: Where to place the Choco SVG */}
                        {/* <div className="m-auto">
                            <div className='mx-5'>
                                <div>12312</div>
                            </div>
                        </div> */}
                    </div>

                    {/* SECOND COL */}
                    <div className="flex m-0 md:m-auto py-10 justify-center items-center w-full">

                        {/* MENU CARD */}
                        <div className="p-5 rounded-3xl bg-secondary max-w-lg shadow-2xl shadow-slate-200 w-full md:w-4/5">
                            <h2 className="mb-4 text-lg font-semibold text-slate-800 text-center">Prueba de nuestro delicioso menu</h2>

                            <Carousel
                                autoPlay
                                width="100%"
                                infiniteLoop
                                interval={4000}
                                showIndicators={false}
                                showThumbs={false}
                                showArrows={false}
                                className="rounded-xl overflow-hidden"
                            >
                                {MenuItemsList.map((item, index) => (
                                    <div key={index} className="rounded-xl overflow-hidden">
                                        <img height="100%" width={100} src={item.imgUri} alt={item.title} className="object-center rounded-xl overflow-hidden z-50" />
                                        <p className="text-center text-accent font-bold text-xl my-2">{item.title}</p>
                                    </div>
                                ))}
                            </Carousel>

                            {/* CTAs */}
                            <div className="w-full h-full mt-1">
                                <a href='/menu' className="hover:scale-[103%] transition duration-150 flex items-center gap-2 rounded-full p-2 px-4 border-accent border text-accent font-semibold justify-center">
                                    <MdOutlineRestaurantMenu size={22} />
                                    <p>Ver menu completo</p>
                                </a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;