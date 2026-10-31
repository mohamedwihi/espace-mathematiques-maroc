---
id: devoir-2bac-ds2-s1
titre: Devoir surveillé n°2 — Semestre 1
niveau: 2bac
semestre: 1
duree: 2 heures
---

:::remarque Consignes
Calculatrice non programmable autorisée. Le barème est indiqué entre parenthèses. Suites numériques, fonctions primitives, fonction logarithme népérien.
:::


:::exercice Suite homographique (6 points)
On considère la suite définie par $u_0=2$ et $u_{n+1}=\dfrac{2u_n+1}{u_n+2}$.
1. Montrer que $u_{n+1}-1=\dfrac{u_n-1}{u_n+2}$, puis que $u_n>1$ pour tout $n$. (1,5 pt)
2. Montrer que $(u_n)$ est décroissante et en déduire qu’elle converge. (1,5 pt)
3. On pose $v_n=\dfrac{u_n-1}{u_n+1}$.
   a) Montrer que $(v_n)$ est géométrique de raison $\dfrac13$. (1,5 pt)
   b) Exprimer $v_n$ puis $u_n$ en fonction de $n$ et calculer $\lim u_n$. (1,5 pt)
:::

:::exercice Primitives (4 points)
1. Déterminer une primitive de chacune des fonctions : (3 pts)
   a) $f(x)=3x^2-4x+1$ ; b) $g(x)=\dfrac{x}{\left(x^2+1\right)^2}$ ; c) $h(x)=\cos x\sin^3x$ ; d) $k(x)=\dfrac{2x+1}{x^2+x+1}$.
2. Déterminer la primitive $F$ de $x\mapsto\dfrac1{\sqrt{2x+1}}$ sur $\left]-\dfrac12;+\infty\right[$ telle que $F(0)=1$. (1 pt)
:::

:::exercice Étude de fonction logarithme (10 points)
On considère $f(x)=x\ln x-x$ pour $x>0$ et $f(0)=0$.
1. Montrer que $f$ est continue à droite en $0$. (1 pt)
2. Étudier la dérivabilité de $f$ à droite en $0$ et interpréter graphiquement. (1,5 pt)
3. Calculer $\lim\limits_{x\to+\infty}f(x)$ et $\lim\limits_{x\to+\infty}\dfrac{f(x)}x$ ; interpréter. (1,5 pt)
4. Calculer $f'(x)$ et dresser le tableau de variations de $f$. (2 pts)
5. Résoudre l’équation $f(x)=0$ et donner l’équation de la tangente en ce point. (2 pts)
6. Résoudre dans $\mathbb R$ : $\ln(x-1)+\ln(x+1)=\ln3$, puis l’inéquation $\ln x\le1$. (2 pts)
:::

# Corrigés

:::corrige
1. $u_{n+1}-1=\dfrac{2u_n+1-u_n-2}{u_n+2}=\dfrac{u_n-1}{u_n+2}$. Récurrence : $u_0>1$ ; si $u_n>1$, numérateur et dénominateur sont positifs.
2. $u_{n+1}-u_n=\dfrac{2u_n+1-u_n^2-2u_n}{u_n+2}=\dfrac{1-u_n^2}{u_n+2}<0$ : décroissante, minorée par $1$, donc convergente.
3. a) $u_{n+1}+1=\dfrac{3(u_n+1)}{u_n+2}$, donc $v_{n+1}=\dfrac{u_n-1}{3(u_n+1)}=\dfrac13v_n$.
   b) $v_0=\dfrac13$ et $v_n=\left(\dfrac13\right)^{n+1}$. De $v_n(u_n+1)=u_n-1$ : $u_n=\dfrac{1+v_n}{1-v_n}\to1$.
:::

:::corrige
1. a) $F(x)=x^3-2x^2+x$ ; b) $G(x)=-\dfrac1{2\left(x^2+1\right)}$ ; c) $H(x)=\dfrac{\sin^4x}4$ ; d) $K(x)=\ln\left(x^2+x+1\right)$ (car $x^2+x+1>0$).
2. $F(x)=\sqrt{2x+1}+c$ et $F(0)=1+c=1$ : $F(x)=\sqrt{2x+1}$.
:::

:::corrige
1. $\lim\limits_{x\to0^+}x\ln x=0$, donc $\lim\limits_{0^+}f=0=f(0)$.
2. $\dfrac{f(x)-f(0)}{x}=\ln x-1\to-\infty$ : $f$ n’est pas dérivable à droite en $0$ ; demi-tangente verticale à l’origine.
3. $f(x)=x(\ln x-1)\to+\infty$ et $\dfrac{f(x)}x=\ln x-1\to+\infty$ : branche parabolique de direction l’axe des ordonnées.
4. $f'(x)=\ln x+1-1=\ln x$ : $f$ décroît sur $]0;1]$, croît sur $[1;+\infty[$ ; minimum $f(1)=-1$.
5. $f(x)=0\iff x(\ln x-1)=0\iff x=e$ (pour $x>0$), et $x=0$. En $x=e$ : $f'(e)=1$, tangente $y=x-e$.
6. Domaine $x>1$ : $\ln\left(x^2-1\right)=\ln3\iff x^2=4\iff x=2$. Et $\ln x\le1\iff0<x\le e$.
:::
