var a = 1, b = 1, c, d;
c = ++a; console.log(c);           // 2 сначала идет увеличение на 1, после возврат a (a=2)
d = b++; console.log(d);           // 1 сначала идет возврат значения b=1, а потом увеличение на 1 (b=2)
c = (2+ ++a); console.log(c);      // 5 а увеличивается на 1 и прибавляется к 2 (a=3)
d = (2+ b++); console.log(d);      // 4 сначала возвращается значение b до увеличения и прибавляется к 2, после
                                   // увеличивается на 1 (b=3)
console.log(a);                    // 3 возвращается значение a
console.log(b);                    // 3 возвращается значение b


