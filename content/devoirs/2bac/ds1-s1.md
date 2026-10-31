---
id: devoir-2bac-ds1-s1
titre: Devoir surveillé n°1 — Semestre 1
niveau: 2bac
semestre: 1
duree: 2 heures
---

:::remarque Consignes
Calculatrice non programmable autorisée. Le barème est indiqué entre parenthèses pour chaque question. Limites et continuité, dérivation et étude de fonctions.
:::


:::exercice Limites (5 points)
Calculer les limites suivantes :
1. $\lim\limits_{x\to+\infty}\left(\sqrt{x^2+x}-x\right)$ (1,25 pt)
2. $\lim\limits_{x\to2}\dfrac{\sqrt{x+2}-2}{x-2}$ (1,25 pt)
3. $\lim\limits_{x\to0}\dfrac{1-\cos x}{x^2}$ (1,25 pt)
4. $\lim\limits_{x\to+\infty}\dfrac{x-\sin x}{x+1}$ (on pourra encadrer $\sin x$) (1,25 pt)
:::

:::exercice Continuité et théorème des valeurs intermédiaires (5 points)
On considère la fonction $f$ définie sur $[-3;+\infty[$ par $f(x)=\dfrac{\sqrt{x+3}-2}{x-1}$ si $x\ne1$ et $f(1)=m$.
1. Déterminer $m$ pour que $f$ soit continue en $1$. (1,5 pt)
2. Soit $g(x)=x^3+x-1$.
   a) Montrer que l’équation $g(x)=0$ admet une unique solution $\alpha$ sur $\mathbb R$ et que $0<\alpha<1$. (2 pts)
   b) Par dichotomie, donner un encadrement de $\alpha$ d’amplitude $0{,}125$. (1,5 pt)
:::

:::exercice Étude d’une fonction polynôme et fonction réciproque (10 points)
Soit $f(x)=x^3-3x+1$ et $(\mathcal C)$ sa courbe dans un repère orthonormé.
1. Calculer les limites de $f$ en $-\infty$ et en $+\infty$. (1 pt)
2. Calculer $f'(x)$ et dresser le tableau de variations de $f$. (2 pts)
3. Montrer que le point $I(0;1)$ est centre de symétrie de $(\mathcal C)$, puis que c’est un point d’inflexion. (2 pts)
4. Donner l’équation de la tangente $(T)$ à $(\mathcal C)$ en $I$. (1 pt)
5. Montrer que l’équation $f(x)=0$ admet exactement trois solutions. (1 pt)
6. Soit $g$ la restriction de $f$ à $[1;+\infty[$.
   a) Montrer que $g$ admet une fonction réciproque $g^{-1}$ définie sur un intervalle $J$ à préciser. (1 pt)
   b) Calculer $g\left(\sqrt3\right)$ puis $\left(g^{-1}\right)'(1)$. (2 pts)
:::

# Corrigés

:::corrige
1. $\sqrt{x^2+x}-x=\dfrac{x}{\sqrt{x^2+x}+x}=\dfrac1{\sqrt{1+\frac1x}+1}\to\dfrac12$.
2. $\dfrac{\sqrt{x+2}-2}{x-2}=\dfrac{1}{\sqrt{x+2}+2}\to\dfrac14$.
3. Limite de référence : $\dfrac12$.
4. $\dfrac{x-1}{x+1}\le\dfrac{x-\sin x}{x+1}\le\dfrac{x+1}{x+1}$ pour $x>0$ ; les deux bornes tendent vers $1$ : la limite vaut $1$.
:::

:::corrige
1. Pour $x\ne1$ : $f(x)=\dfrac{(x+3)-4}{(x-1)\left(\sqrt{x+3}+2\right)}=\dfrac1{\sqrt{x+3}+2}\to\dfrac14$. $f$ est continue en $1$ si et seulement si $m=\dfrac14$.
2. a) $g'(x)=3x^2+1>0$ : $g$ est continue et strictement croissante sur $\mathbb R$, de $-\infty$ à $+\infty$ : bijection, donc unique solution $\alpha$. $g(0)=-1<0$ et $g(1)=1>0$ : $0<\alpha<1$.
   b) $g(0{,}5)=-0{,}375<0$ : $\alpha\in]0{,}5;1[$ ; $g(0{,}75)\approx0{,}17>0$ : $\alpha\in]0{,}5;0{,}75[$ ; $g(0{,}625)\approx-0{,}13<0$ : $0{,}625<\alpha<0{,}75$.
:::

:::corrige
1. $f(x)=x^3\left(1-\dfrac3{x^2}+\dfrac1{x^3}\right)$ : $\lim\limits_{-\infty}f=-\infty$ et $\lim\limits_{+\infty}f=+\infty$.
2. $f'(x)=3x^2-3=3(x-1)(x+1)$ : $f$ croît sur $]-\infty;-1]$ et $[1;+\infty[$, décroît sur $[-1;1]$ ; $f(-1)=3$, $f(1)=-1$.
3. $f(-x)+f(x)=(-x^3+3x+1)+(x^3-3x+1)=2=2\times1$ : $I(0;1)$ est centre de symétrie. $f''(x)=6x$ s’annule en changeant de signe en $0$ : $I$ est un point d’inflexion.
4. $f'(0)=-3$ : $(T):y=-3x+1$.
5. $f$ est strictement monotone sur chacun des intervalles $]-\infty;-1]$, $[-1;1]$, $[1;+\infty[$, et change de signe sur chacun (de $-\infty$ à $3$, de $3$ à $-1$, de $-1$ à $+\infty$) : une solution dans chacun, trois en tout.
6. a) $g$ est continue et strictement croissante sur $[1;+\infty[$ : bijection sur $J=[-1;+\infty[$.
   b) $g\left(\sqrt3\right)=3\sqrt3-3\sqrt3+1=1$ ; $g'\left(\sqrt3\right)=3\times3-3=6\ne0$, donc $\left(g^{-1}\right)'(1)=\dfrac1{g'\left(\sqrt3\right)}=\dfrac16$.
:::
