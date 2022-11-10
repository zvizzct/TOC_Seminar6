### Exercise 1 - CFG

**Give context-free grammars that generate the following languages. In all parts, the alphabet Σ is {0,1}.**

**1**. ${\{ w | w  \text{ contains the same number of 1’s and 0’s }\}}$ - $S\rightarrow SS \ | \ 0S1 | \ 1S0 \ | \ \epsilon$
**2**. ${\{ ww^R| \text { where }w^R \text{ is the reverse order}}\}$ - $S\rightarrow 0S0 \ | \ 1S1 \ | \ \epsilon$

**Using the created grammar, give the derivation tree for the following strings**

**1**. $010101$ for the first grammar

<div style="display: flex;justify-content:center;">
<img style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;" src="/_resources/tree1.png" width="100"/>
</div>

**2**. $001100$ for the second grammar

<div style="display: flex;justify-content:center;">
<img style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;" src="/_resources/tree2.png" width="100"/>
</div>
<div style="page-break-after: always;"></div>

---

### Exercise 2 - RegEx

1. Construct an FA that recognizes a timestamps of the format technical timestamp. The format $YYY-MM-DDThh:mm:ss.sss+zz:zz$ (e.g.
   $2015-02-07T13:28:17.239+02:00$ or $2017-01-01T00:00:00Z$).The time SHALL specified at least to the second and SHALL include a time zone. Note: This is intended for when precisely observed times are required (typically system logs etc.), and not human-reported times.
   <div style="display: flex;justify-content:center;">
   <img style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;" src="/_resources/0e1aa0a52b1deb73d1b892931e2a52bd.png" width="1000"/>
   </div>

2. Create a regular expression for the automaton
   Range values:

   $$
   p = 0-9 \\
   	q = 0-2 \\
   	z = 1-2 \\
   	x = 0-1 \\
   	y = 0-3 \\
   	k = 0-5 \\
   	m = 0-4 \\
   	n = 1-9
   $$

   $p⁴-(0p \ | \ 1q)-(0n \ | \ zp \ | \ 3x)T(xp\ | \ 2y):(kp):(kp)(.p³(+(0p \ | \ 1m)|-(0p \ | \ 1q)):kp|z)$

3. Create a regular expression in Javascript format that recognizes a timestamp (hint: you can use an online checker such as https://regexr.com/)
   ```js
   const regexTime =
     /^(\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]))T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.(\d{3}(\+(0[0-9]|1[0-4])|-(0[0-9]|1[0-2])):[0-5][0-9])|Z)$/;
   ```
4. Add the regular expression in a simple webpage to test the regular expresion
   - [Web page with timestamp regex](https://zvizzct.github.io/TOC_Seminar6/) (files added to zip)
