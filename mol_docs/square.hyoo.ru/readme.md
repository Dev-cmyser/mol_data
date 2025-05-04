# Square Code

The best alternative to QR Code and DataMatrix.

## Examples

> | ![](https://i.imgur.com/2hlgrgD.png) | ![](https://i.imgur.com/f65qKxg.png)
> |--------------------------------------|-------------------------------------
> 
> https://square.hyoo.ru/

## Comparison

| Aspect                                                     | Square Code     | QR Code | DataMatrix
|------------------------------------------------------------|-----------------|---------|-----------
| Symetric                                                   | ✅              | ❌     | ❌
| Human readable                                             | ✅ (if colored) | ❌     | ❌
| Max data size                                              | Unlimited       | 3 KB    | 3 KB
| Metadata size                                              | 0               | ~69%    | ~51%
| Lost data restore                                          | 75% any data    | 7-30% (except meta data) | 30% (ECC-200 only, except meta data)
| Min size (with margins)                                    | 8x8             | 29x29   | 12x12
| Max size (with margins)                                    | Unlimited       | 185x185 | 146x146
| Size for "https://square.hyoo.ru/" (Max ECC, with margins) | 32x32           | 33x33   | 22x22
| Rotation proof                                             | ✅             | ✅      | ✅
| Mirror proof                                               | ✅             | ✅      | ❌
| Negative proof                                             | ✅             | ✅      | ❌

> [Other comparison](https://ru.wikipedia.org/wiki/%D0%A1%D1%80%D0%B0%D0%B2%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5_%D1%85%D0%B0%D1%80%D0%B0%D0%BA%D1%82%D0%B5%D1%80%D0%B8%D1%81%D1%82%D0%B8%D0%BA_%D1%88%D1%82%D1%80%D0%B8%D1%85%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2)
