"use strict";(self.webpackChunkmui_color_input=self.webpackChunkmui_color_input||[]).push([[237],{4109:(A,e,i)=>{i.r(e),i.d(e,{default:()=>Z});var l=i(7294),r=i(512),t=i(8700),c=i(3692),M=i(2263);var J=i(6040);const w="heroBanner_qdFl",k="subtitle_RlPM",m="buttons_AeoN";var n=i(5893);const o=()=>{const{siteConfig:A}=(0,M.Z)(),[e,i]=l.useState("rgba(234, 18, 18, 0.87)");return(0,n.jsx)("header",{className:(0,r.Z)("hero hero--primary",w),children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("img",{src:"data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMwaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA3LjEtYzAwMCA3OS5iMGY4YmU5MCwgMjAyMS8xMi8xNS0yMToyNToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjIgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkMwMzExNzkxRTJFMTFFREJGRTRFMUJDMDA0QzY0RkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkMwMzExN0ExRTJFMTFFREJGRTRFMUJDMDA0QzY0RkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCQzAzMTE3NzFFMkUxMUVEQkZFNEUxQkMwMDRDNjRGRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCQzAzMTE3ODFFMkUxMUVEQkZFNEUxQkMwMDRDNjRGRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgMDAwMDAwMDAwMBAQEBAQEBAgEBAgICAQICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA//AABEIAMgAyAMBEQACEQEDEQH/xADOAAEAAgMBAQEAAAAAAAAAAAAABggEBwkFCgMBAQABBQEBAQAAAAAAAAAAAAAHBQYICQoDBAIQAAEBBAIJDgwHAQEAAAAAAAAFAQIDBAYHk3S01LXVVhcIEVGxEnIzczSUFjaWGBkhcTKzVBU1dleXOFgxIhNVlaU3gRQRAAEABQMKDgwOAwADAAAAAAABAgMEBQYHGRFyspTUlVZXCAkS0jNzs9M0dDXVNpY3GCExcZGxMsNUtFXWGkHBIpITY5MUZBV1tRYXUTgKYYFG/9oADAMBAAIRAxEAPwDkuQmd6wAAAAAAAM+X3p3xvbLSRJO8EqVy9kk+NtqiT9yuHmAAAAAATCiO+T+5ldmZNpma+5RSy3lDNlfSI52dyOOutLFUnBuBITAAAAAAIfT3okrbtKw0mlbk5wyx7jTYlyCspvoClR+nK+kMSupJ5o7AAAAAAABPDhoOxEAAAAAAAGfL70743tlpIkneCVK5eySfG21RJ+5XDzAAAAAAJhRHfJ/cyuzMm0zNfcopZbyhmyvpEc7O5HHXWliqTg3AkJgAAAAAEPp70SVt2lYaTStyc4ZY9xpsS5BWU30BSo/TlfSGJXUk80dgAAAAAAAnhw0HYiAAAAAAADPl96d8b2y0kSTvBKlcvZJPjbaok/crh5gAAAAAEwojvk/uZXZmTaZmvuUUst5QzZX0iOdncjjrrSxVJwbgSEwAAAAACH096JK27SsNJpW5OcMse402JcgrKb6ApUfpyvpDErqSeaOwAAAAAAATw4aDsRAAAAAAABny+9O+N7ZaSJJ3glSuXsknxttUSfuVw8wAAAAACYUR3yf3MrszJtMzX3KKWW8oZsr6RHOzuRx11pYqk4NwJCYAAAAABD6e9ElbdpWGk0rcnOGWPcabEuQVlN9AUqP05X0hiV1JPNHYAAAAAAAJ4cNB2IgAAAAAAAz5fenfG9stJEk7wSpXL2ST422qJP3K4eYAAAAABMKI75P7mV2Zk2mZr7lFLLeUM2V9IjnZ3I4660sVScG4EhMAAAAAAh9PeiStu0rDSaVuTnDLHuNNiXIKym+gKVH6cr6QxK6knmjsAAAAAAAE8OGg7EQAAAAAAAZ8vvTvje2WkiSd4JUrl7JJ8bbVEn7lcPMAAAAAAmFEd8n9zK7MybTM19yillvKGbK+kRzs7kcddaWKpODcCQmAAAAAAQ+nvRJW3aVhpNK3Jzhlj3GmxLkFZTfQFKj9OV9IYldSTzR2AAAAAAACynNhF9Ah8oU8YGq6jeySvUURvtErpIPpsc4phVA7wQzahzYRfQIfKFPGAo3skr1FEb7RK6RTY5xTCqB3ghm1Dmwi+gQ+UKeMBRvZJXqKI32iV0imxzimFUDvBDNqHNhF9Ah8oU8YCjeySvUURvtErpFNjnFMKoHeCGbUObCL6BD5Qp4wFG9kleoojfaJXSKbHOKYVQO8EM2oc2EX0CHyhTxgKN7JK9RRG+0SukU2OcUwqgd4IZtR6klR2j36LXYiU6885Eed2zs8pOMazUdeZ+Vs49qNZttc+xnm98l9xZod3SDvyrBCKqEJicQW7KUpq9lLxVMZJyP+gPObyali9QWHSqk+h0YqsalWT0LSn5bFm0TVSlin4Vk/+jL5uUb/AGj+wUr6P31A8mf1S+3xf7oLG94gzouFcnebsK2gc3KN/tH9gpX0OoHkz+qX2+L/AHQPeIM6LhXJ3m7CtoHNyjf7R/YKV9DqB5M/ql9vi/3QPeIM6LhXJ3m7CtoHNyjf7R/YKV9DqB5M/ql9vi/3QPeIM6LhXJ3m7CtoHNyjf7R/YKV9DqB5M/ql9vi/3QPeIM6LhXJ3m7CtoNu1S1eUSX5hehzMlOSrJWXTojj0koPteebEizjjzr//AL4U+5tWMZ4Nqx1ur+LWl5SPmTm8ydGzd/mtc2jq8xZVRm8pbPD08oWVd9Esy0KGzdZCiUJbL1Uq1NFVRV7SCFJ6P+hLOovzlD1HOXEGckqtmqUrMZNQBdK3yVKiE/eXB4QhCO38hCqU1eylKKlTdOZahGuu8vT8Tl9/zuP/AIf5i+2kBU/+dfxkuHNaSvEwzLUI113l6ficfzuP/h/mL7aKf/Ov4yXDmtJXiYZlqEa67y9PxOP53H/w/wAxfbRT/wCdfxkuHNaSvEwzLUI113l6ficfzuP/AIf5i+2in/zr+Mlw5rSV4mGZahGuu8vT8Tj+dx/8P8xfbRT/AOdfxkuHNaSvEx7lGtHOrCl68mUbpBLL86jKsw2FPSrixCkn4rkvCiTsHazUinS03AecmZZx7VciOt/Lqfg1rCnxWc+VsFhzWKQ1d2ZvzFWqoslklZCEpShVPyV11lU1VVko7KE9v/JYs5ufnzpsoJAxOCxicVwbQx4YKqtFP4xJdXRK/Ss1qmiUhCq6OyhHirIT8HaqoN0d3vouZLUt+YFJb5LE6ys7nnjlabDSmE9MVnB8MYbzegHFw7vfRcyWpb8wKS3yOsrO5545Wmw0opis4PhjDeb0A4uHd76LmS1LfmBSW+R1lZ3PPHK02GlFMVnB8MYbzegHFw7vfRcyWpb8wKS3yOsrO5545Wmw0opis4PhjDeb0A4uHd76LmS1LfmBSW+R1lZ3PPHK02GlFMVnB8MYbzegHFw7vfRcyWpb8wKS3yOsrO5545Wmw0opis4PhjDeb0A4uOWxl0bcgAAAAAAAZcp5EThnvNwjwbeMit+NJg1PT0kP9Y7ejMTKPIiwAAAAAA35URxyk9ppV0TpHM4eoOle08CpFE6u5nHXGtioWLIwIbAAAAAAJzVr06o3bke4Jwt+VXJ56rEWapa8teSr7rauyKFyiDjG8AAAAAAAHzwGzI6qwAAAAAAAZcp5EThnvNwjwbeMit+NJg1PT0kP9Y7ejMTKPIiwAAAAAA35URxyk9ppV0TpHM4eoOle08CpFE6u5nHXGtioWLIwIbAAAAAAJzVr06o3bke4Jwt+VXJ56rEWapa8teSr7rauyKFyiDjG8AAAAAAAHzwGzI6qwAAAAAAAZcp5EThnvNwjwbeMit+NJg1PT0kP9Y7ejMTKPIiwAAAAAA35URxyk9ppV0TpHM4eoOle08CpFE6u5nHXGtioWLIwIbAAAAAAJzVr06o3bke4Jwt+VXJ56rEWapa8teSr7rauyKFyiDjG8AAAAAAAHzwGzI6qwAAAAAAAZcp5EThnvNwjwbeMit+NJg1PT0kP9Y7ejMTKPIiwAAAAAA35URxyk9ppV0TpHM4eoOle08CpFE6u5nHXGtioWLIwIbAAAAAAJzVr06o3bke4Jwt+VXJ56rEWapa8teSr7rauyKFyiDjG8AAAAAAAHzwGzI6qwAAAAAAAZcp5EThnvNwjwbeMit+NJg1PT0kP9Y7ejMTKPIiwAAAAAA35URxyk9ppV0TpHM4eoOle08CpFE6u5nHXGtioWLIwIbAAAAAAJzVr06o3bke4Jwt+VXJ56rEWapa8teSr7rauyKFyiDjG8AAAAAAAHMTsRLXxGRurqhjEqNItAMFH+3WG0m3iklhGBr3fRlcA7ES18Rkbq6oYxFItAMFH+3WG0iklhGBr3fRlcA7ES18Rkbq6oYxFItAMFH+3WG0iklhGBr3fRlcA7ES18Rkbq6oYxFItAMFH+3WG0iklhGBr3fRlcA7ES18Rkbq6oYxFItAMFH+3WG0iklhGBr3fRlcA7ES18Rkbq6oYxFItAMFH+3WG0iklhGBr3fRlcB5cxogqibGiSr1PkyK8xrsRr7lHpzat/Ucd1GMY8qOtZqOsZ/0haWudzkzJOULWBNJCRNusyZs1tGiJu6iE6NVC9TQpdkp7FWp2+yQ9K3Kqh0uY82lMygTw6qvCGaPo0vajRKEsmarKro0O6lXRaCrU0PYq1KqT8eygpZdJ/V6axsWpTLyVxfxW+rtcpbX9+uXqptbCu1DsoKWXSf1emsbCmXkri/it9Xa5R/frl6qbWwrtQ7KCll0n9XprGwpl5K4v4rfV2uUf365eqm1sK7UOygpZdJ/V6axsKZeSuL+K31drlH9+uXqptbCu1DsoKWXSf1emsbCmXkri/it9Xa5R/frl6qbWwrtRsirqoBQojGWoz1LEuddm5SUa9+olT0m7BdlpprngbCjz70R6I/OO6jNq6xjGNbq/gwxfymc/HAJuHOCJcZr4hEHh+bPSNC0jzB2QohiowSlOiVhbzokp+kQipoValRKaqe0UGPTjucs2aqqXZLkzc1VmiyzRoldCyF1mTNCqEM2KVqtVZCeyipUq9mrUq7LzezOUCNydXvIxP94vZYm2/Opn7PlpfnEI85Y95vc4zezOUCNydXvIe8XssTbfnUz9nx+cQjzlj3m9zjN7M5QI3J1e8h7xeyxNt+dTP2fH5xCPOWPeb3OM3szlAjcnV7yHvF7LE2351M/Z8fnEI85Y95vc4zezOUCNydXvIe8XssTbfnUz9nx+cQjzlj3m9zmyKoKrFBWrKomny6+jfqzE7N7VrYCqx11kJKn4zzXmvSbPBtYbWM1NVuq1njZa0tf+jh2c5Kvjy0mbb6BVmr/9Uz+FoojB/wD8l4zfzfsZ85YuM00KiTs5P8aXXZqt12bdooy+iZNHlKyyn0TNKyEqsUqoQhdCdEshPaQkv72eF/KNCsSnepjj7ytDcTTxzqZ+zxlLRISrw4hVoPO2js8L+UaFYlO9R7ytDcTTxzqZ+zwokJV4cQq0HnbR2eF/KNCsSneo95WhuJp451M/Z4USEq8OIVaDzto7PC/lGhWJTvUe8rQ3E08c6mfs8KJCVeHEKtB520dnhfyjQrEp3qPeVobiaeOdTP2eFEhKvDiFWg87aOzwv5RoViU71HvK0NxNPHOpn7PCiQlXhxCrQedtKkm081TAAAAAAAAgi77SjcHB82wwrno6QnrWHfYlS6oVuJXureE8cisqIAAAAABnSm8qNpO4QTzBPLa8SSmvRPY3IqjhuN+3qr6S7mKYLlIAAAAAANzaPn+xUJttTwEqFjTlciH+sZ7KzMqsiP8A2kklvl7/AG97OpxiGdFwAAAAAAAOTR34nHeAAAAAAACCLvtKNwcHzbDCuejpCetYd9iVLqhW4le6t4TxyKyogAAAAAGdKbyo2k7hBPME8trxJKa9E9jciqOG437eqvpLuYpguUgAAAAAA3No+f7FQm21PASoWNOVyIf6xnsrMyqyI/8AaSSW+Xv9vezqcYhnRcAAAAAAADk0d+Jx3gAAAAAAAgi77SjcHB82wwrno6QnrWHfYlS6oVuJXureE8cisqIAAAAABnSm8qNpO4QTzBPLa8SSmvRPY3IqjhuN+3qr6S7mKYLlIAAAAAANzaPn+xUJttTwEqFjTlciH+sZ7KzMqsiP/aSSW+Xv9vezqcYhnRcAAAAAAADk0d+Jx3gAAAAAAAgi77SjcHB82wwrno6QnrWHfYlS6oVuJXureE8cisqIAAAAABnSm8qNpO4QTzBPLa8SSmvRPY3IqjhuN+3qr6S7mKYLlIAAAAAANzaPn+xUJttTwEqFjTlciH+sZ7KzMqsiP/aSSW+Xv9vezqcYhnRcAAAAAAADk0d+Jx3gAAAAAAAgi77SjcHB82wwrno6QnrWHfYlS6oVuJXureE8cisqIAAAAABnSm8qNpO4QTzBPLa8SSmvRPY3IqjhuN+3qr6S7mKYLlIAAAAAANzaPn+xUJttTwEqFjTlciH+sZ7KzMqsiP8A2kklvl7/AG97OpxiGdFwAAAAAAAOeeYytjItSssjfZ190n+QhjAd70x/ik56qLnL3xcxK3YTxgMxlbGRalZZG+xSf5CGMB3vTH+KRRc5e+LmJW7CeMBmMrYyLUrLI32KT/IQxgO96Y/xSKLnL3xcxK3YTxgMxlbGRalZZG+xSf5CGMB3vTH+KRRc5e+LmJW7CeMBmMrYyLUrLI32KT/IQxgO96Y/xSKLnL3xcxK3YTxgMxlbGRalZZG+xSf5CGMB3vTH+KRRc5e+LmJW7CeMDWlJaoKx5VXjwZii85Biuwpdr0N+NJ7ZjHoLrzrW6ky38WNMcJxsubJTlZK1vHJPSuYvMKaMmSqrREPiylVKjNCq6NC0h6i6KiyEo7KqEJ+CqgvWC5qvOBt4co1YzaxRZmlZbsofIT8Cf1A8HNRWBk5NWaUvgsbrhZNuE7K0oncRVaKXOEYs4rbkJ4wGaisDJyas0pfA64WTbhOytKJ3EKKXOEYs4rbkJ4wGaisDJyas0pfA64WTbhOytKJ3EKKXOEYs4rbkJ4wGaisDJyas0pfA64WTbhOytKJ3EKKXOEYs4rbkJ4wGaisDJyas0pfA64WTbhOytKJ3EKKXOEYs4rbkJ4wMScoTSdAgxGrCZ6vdUIL0vKvTU8nS7sSLBmZOZiMY2NOQ9sxyHD8OpqtY1rNcxYymp6ZsZ1EQFWQEURElocu+rPCFHZ8Z/RobquqrLV3dlotGlm08XRVNCnRVKqtW6ZNZonOOR1k+u0KmuijRp93UVTViMDZoRVbM10JSlrFFKqEoZrI+TokoTUqoQhNU8L1JP66f/MJF/GLf393+s+zaaQqdCtnO8VT/AH2k9xuPUk/rp/8AMJF/D7+7/WfZtNIKFbOd4qn++0nuNx6kn9dP/mEi/h9/d/rPs2mkFCtnO8VT/faT3G49ST+un/zCRfw+/u/1n2bTSChWzneKp/vtJ7jcepJ/XT/5hIv4ff3f6z7NppBQrZzvFU/32k9xuTWruklH6raZI1P6fLiRRyiFGn5ybXFuaUpKPLp8vMJ02nwYsWFIx5qaedfnJyG5+SG81jXtVvg1WsoMpoXEpXQNvJyTju3eo29IVVZMlVFkLLrKrqrpQhK6FVewqqsnspR2v8mSeSBmc85RJrKPkvGozNdEGUOYvLzo1kROArpRonF6UVqKM4qsumqsshHyVU9v/BaLvA9DP7gqC2ZTxcRJ1bZ88Goh3menN91GHl54t4tbMMu4d4HoZ/cFQWzKeLh1bZ88Goh3menFGHl54t4tbMMu4d4HoZ/cFQWzKeLh1bZ88Goh3menFGHl54t4tbMMu4d4HoZ/cFQWzKeLh1bZ88Goh3menFGHl54t4tbMMu4d4HoZ/cFQWzKeLh1bZ88Goh3menFGHl54t4tbMMu4d4HoZ/cFQWzKeLh1bZ88Goh3menFGHl54t4tbMMu46GmM5PgAAAAAAAK61idK521k+5IZJ0meB2dcvZJJikfwAyr2lmkhJXy5wAAAAADQ1evE6M24qXPJkiTe6u91jPwrErTWbpftbZWS5XUk4mIAAAAAA0LpQ/T9Wp7tswmnkizSdJMH315NcleYzpcgO/fJNDieZ5mzQAAAAAAAH32nOQcmYAAAAAAAK61idK521k+5IZJ0meB2dcvZJJikfwAyr2lmkhJXy5wAAAAADQ1evE6M24qXPJkiTe6u91jPwrErTWbpftbZWS5XUk4mIAAAAAA0LpQ/T9Wp7tswmnkizSdJMH315NcleYzpcgO/fJNDieZ5mzQAAAAAAAH32nOQcmYAAAAAAAK61idK521k+5IZJ0meB2dcvZJJikfwAyr2lmkhJXy5wAAAAADQ1evE6M24qXPJkiTe6u91jPwrErTWbpftbZWS5XUk4mIAAAAAA0LpQ/T9Wp7tswmnkizSdJMH315NcleYzpcgO/fJNDieZ5mzQAAAAAAAH32nOQcmYAAAAAAAK61idK521k+5IZJ0meB2dcvZJJikfwAyr2lmkhJXy5wAAAAADQ1evE6M24qXPJkiTe6u91jPwrErTWbpftbZWS5XUk4mIAAAAAA0LpQ/T9Wp7tswmnkizSdJMH315NcleYzpcgO/fJNDieZ5mzQAAAAAAAH32nOQcmYAAAAAAAK61idK521k+5IZJ0meB2dcvZJJikfwAyr2lmkhJXy5wAAAAADQ1evE6M24qXPJkiTe6u91jPwrErTWbpftbZWS5XUk4mIAAAAAA0LpQ/T9Wp7tswmnkizSdJMH315NcleYzpcgO/fJNDieZ5mzQAAAAAAAH32nOQcmYAAAAAAAK61idK521k+5IZJ0meB2dcvZJJikfwAyr2lmkhJXy5wAAAAADQ1evE6M24qXPJkiTe6u91jPwrErTWbpftbZWS5XUk4mIAAAAAA0LpQ/T9Wp7tswmnkizSdJMH315NcleYzpcgO/fJNDieZ5mzQAAAAAAAH/9k=",width:100,alt:"MUI color input"}),(0,n.jsx)("h1",{className:"hero__title",children:A.title}),(0,n.jsxs)("p",{className:(0,r.Z)("hero__subtitle",k),children:["A color input designed for the React library"," ",(0,n.jsx)(c.Z,{target:"_blank",href:"https://mui.com",children:"MUI"})," ","built with"," ",(0,n.jsx)(c.Z,{target:"_blank",href:"https://www.npmjs.com/package/@ctrl/tinycolor",children:"TinyColor"}),"."]}),(0,n.jsx)(t.O,{format:"rgb",value:e,onChange:A=>{i(A)}}),(0,n.jsx)("div",{className:m,children:(0,n.jsx)(c.Z,{className:"button button--secondary button--lg",to:"/docs/getting-started",children:"Get started"})})]})})},Z=()=>{const{siteConfig:A}=(0,M.Z)();return(0,n.jsx)(J.Z,{description:A.tagline,children:(0,n.jsx)(o,{})})}}}]);