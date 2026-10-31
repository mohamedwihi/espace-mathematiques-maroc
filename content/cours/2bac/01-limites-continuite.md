---
id: 2bac-limites-continuite
titre: Limites et continuité
niveau: 2bac
semestre: 1
duree: 16 heures
---

## Objectifs
- Compléter l’étude des limites (composée, comparaison) et maîtriser la continuité en un point et sur un intervalle.
- Utiliser l’image d’un intervalle par une fonction continue et le théorème des valeurs intermédiaires ; appliquer la dichotomie.
- Étudier la fonction réciproque d’une fonction continue et strictement monotone.
- Connaître la fonction racine $n$-ième et les puissances rationnelles.

## Prérequis
- Limites d’une fonction (1BAC).
- Dérivation et étude de fonctions (1BAC).
- Ordre, intervalles.

# I. Compléments sur les limites

:::propriete Limite d’une composée
Si $\lim\limits_{x\to a}u(x)=b$ et $\lim\limits_{X\to b}v(X)=c$, alors $\lim\limits_{x\to a}v\left(u(x)\right)=c$ ($a$, $b$, $c$ réels ou infinis).
:::

:::exemple
$\lim\limits_{x\to+\infty}\sqrt{\dfrac{4x+1}{x-2}}$ : $\dfrac{4x+1}{x-2}\to4$ et $\sqrt X\to2$ quand $X\to4$, donc la limite vaut $2$.

$\lim\limits_{x\to+\infty}x\sin\dfrac1x$ : on pose $X=\dfrac1x\to0^+$, et $\dfrac{\sin X}{X}\to1$, donc la limite vaut $1$.
:::

:::propriete Limites et ordre (rappel)
Si $u(x)\le f(x)\le v(x)$ au voisinage de $a$ et $\lim u=\lim v=\ell$, alors $\lim f=\ell$. Si $f(x)\ge u(x)$ et $\lim u=+\infty$, alors $\lim f=+\infty$.
:::

# II. Continuité

## 1. Continuité en un point

:::definition
Soit $f$ définie sur un intervalle ouvert contenant $x_0$. On dit que $f$ est **continue en $x_0$** si
$$\lim_{x\to x_0}f(x)=f(x_0).$$
- $f$ est **continue à droite** en $x_0$ si $\lim\limits_{x\to x_0^+}f(x)=f(x_0)$, et **à gauche** si $\lim\limits_{x\to x_0^-}f(x)=f(x_0)$.
- $f$ est continue en $x_0$ si et seulement si elle est continue à droite et à gauche en $x_0$.
:::

:::exemple
$f(x)=\dfrac{x^2-1}{x-1}$ si $x\ne1$ et $f(1)=2$ : $\lim\limits_{x\to1}f(x)=\lim\limits_{x\to1}(x+1)=2=f(1)$ : $f$ est continue en $1$.

$g(x)=x^2$ si $x\le1$ et $g(x)=2x$ si $x>1$ : $\lim\limits_{x\to1^-}g(x)=1=g(1)$ mais $\lim\limits_{x\to1^+}g(x)=2$ : $g$ est continue à gauche mais pas à droite en $1$.
:::

:::definition Prolongement par continuité
Si $f$ n’est pas définie en $x_0$ mais $\lim\limits_{x\to x_0}f(x)=\ell$ (réel), la fonction $\tilde f$ égale à $f$ sur $D_f$ et à $\ell$ en $x_0$ est continue en $x_0$ : c’est le **prolongement par continuité** de $f$ en $x_0$.
:::

## 2. Continuité sur un intervalle

:::definition
$f$ est continue sur un intervalle ouvert $]a;b[$ si elle est continue en tout point de cet intervalle ; sur $[a;b]$ si de plus elle est continue à droite en $a$ et à gauche en $b$.
:::

:::propriete
- Les polynômes, les fonctions rationnelles, $\sqrt x$, $\sin$, $\cos$ sont continues sur leur ensemble de définition ; $\tan$ est continue sur chaque intervalle $\left]-\dfrac\pi2+k\pi;\dfrac\pi2+k\pi\right[$.
- La somme, le produit, le quotient (dénominateur non nul) de fonctions continues sont continus.
- Si $u$ est continue sur $I$ et $v$ continue sur $J$ avec $u(I)\subset J$, alors $v\circ u$ est continue sur $I$. En particulier $\sqrt{u}$ est continue là où $u\ge0$.
- Toute fonction dérivable sur $I$ est continue sur $I$ (la réciproque est fausse : $|x|$ en $0$).
:::

# III. Image d’un intervalle — valeurs intermédiaires

:::propriete
L’image d’un intervalle par une fonction continue est un **intervalle**. L’image d’un segment $[a;b]$ par une fonction continue est un **segment** $[m;M]$ où $m$ et $M$ sont le minimum et le maximum de $f$ sur $[a;b]$.
:::

:::propriete Cas d’une fonction continue strictement monotone
| Intervalle $I$ | $f$ strictement croissante | $f$ strictement décroissante |
|---|---|---|
| $[a;b]$ | $[f(a);f(b)]$ | $[f(b);f(a)]$ |
| $[a;b[$ | $\left[f(a);\lim\limits_{b^-}f\right[$ | $\left]\lim\limits_{b^-}f;f(a)\right]$ |
| $]a;+\infty[$ | $\left]\lim\limits_{a^+}f;\lim\limits_{+\infty}f\right[$ | $\left]\lim\limits_{+\infty}f;\lim\limits_{a^+}f\right[$ |
:::

:::theoreme Théorème des valeurs intermédiaires
Si $f$ est continue sur $[a;b]$, alors pour tout réel $k$ compris entre $f(a)$ et $f(b)$, l’équation $f(x)=k$ admet **au moins une** solution dans $[a;b]$.

Si de plus $f$ est **strictement monotone** sur $[a;b]$, cette solution est **unique**.
:::

:::propriete Cas particulier
Si $f$ est continue sur $[a;b]$ et $f(a)\times f(b)<0$, l’équation $f(x)=0$ admet au moins une solution dans $]a;b[$ (une seule si $f$ est strictement monotone).
:::

:::exemple
$f(x)=x^3+x-1$ est continue et strictement croissante sur $[0;1]$ ($f'(x)=3x^2+1>0$), $f(0)=-1<0$ et $f(1)=1>0$ : l’équation $f(x)=0$ admet une unique solution $\alpha\in]0;1[$.
:::

:::methode Dichotomie
Pour encadrer $\alpha$, on coupe l’intervalle en deux et on garde la moitié où $f$ change de signe : $f(0{,}5)=-0{,}375<0$ donc $\alpha\in]0{,}5;1[$ ; $f(0{,}75)\approx0{,}17>0$ donc $\alpha\in]0{,}5;0{,}75[$ ; $f(0{,}625)\approx-0{,}13<0$ donc $\alpha\in]0{,}625;0{,}75[$, etc.
:::

```figure
{"type":"graph","x":[-1.5,1.6],"y":[-3,2.5],"width":330,
 "functions":[{"fn":"x*x*x+x-1","label":"f(x)=x^3+x-1","color":"brand"}],
 "points":[{"x":0.6823,"y":0,"label":"α"}],
 "caption":"La courbe coupe l’axe des abscisses une seule fois, en $\\alpha\\approx0{,}68$."}
```

# IV. Fonction réciproque

:::theoreme
Si $f$ est **continue et strictement monotone** sur un intervalle $I$, alors $f$ est une **bijection** de $I$ sur l’intervalle $J=f(I)$ : pour tout $y\in J$, l’équation $f(x)=y$ admet une unique solution $x\in I$. La fonction $f^{-1}:J\to I$ ainsi définie est la **fonction réciproque** de $f$ :
$$\left(y=f(x)\text{ et }x\in I\right)\iff\left(x=f^{-1}(y)\text{ et }y\in J\right).$$
:::

:::propriete
- $f^{-1}$ est continue sur $J$ et a la **même monotonie** que $f$.
- Dans un repère orthonormé, les courbes de $f$ et de $f^{-1}$ sont **symétriques par rapport à la droite $y=x$**.
- Pour tout $x\in I$, $f^{-1}(f(x))=x$ ; pour tout $y\in J$, $f(f^{-1}(y))=y$.
:::

:::exemple
$f(x)=x^2-2x$ sur $I=[1;+\infty[$ est continue et strictement croissante, $J=f(I)=[-1;+\infty[$. Pour $y\in J$ : $x^2-2x=y\iff(x-1)^2=y+1\iff x=1+\sqrt{y+1}$ (car $x\ge1$). Donc $f^{-1}(x)=1+\sqrt{x+1}$ sur $[-1;+\infty[$.
:::

# V. Racine $n$-ième et puissances rationnelles

:::definition
Soit $n\in\mathbb N^*$. La fonction $x\mapsto x^n$ est continue et strictement croissante sur $[0;+\infty[$ ; sa réciproque est la fonction **racine $n$-ième**, notée $x\mapsto\sqrt[n]x$. Pour $x\ge0$ et $y\ge0$ :
$$\sqrt[n]x=y\iff y^n=x.$$
:::

:::propriete
Pour $a\ge0$, $b\ge0$ et $n$, $p$ dans $\mathbb N^*$ :
$$\left(\sqrt[n]a\right)^n=a\quad\sqrt[n]{a^n}=a\quad\sqrt[n]a\sqrt[n]b=\sqrt[n]{ab}\quad\frac{\sqrt[n]a}{\sqrt[n]b}=\sqrt[n]{\frac ab}\ (b>0)\quad\sqrt[n]{\sqrt[p]a}=\sqrt[np]a.$$
$\sqrt[n]a=\sqrt[n]b\iff a=b$ et $\sqrt[n]a<\sqrt[n]b\iff a<b$.
:::

:::definition Puissance rationnelle
Pour $a>0$ et $r=\dfrac pq$ ($p\in\mathbb Z$, $q\in\mathbb N^*$) : $a^{r}=\sqrt[q]{a^p}$. Les règles de calcul des puissances entières restent valables : $a^ra^{r'}=a^{r+r'}$, $\left(a^r\right)^{r'}=a^{rr'}$, $(ab)^r=a^rb^r$.
:::

:::exemple
$\sqrt[3]{27}=3$ ; $\sqrt[4]{16}=2$ ; $8^{\frac23}=\left(\sqrt[3]8\right)^2=4$ ; $\dfrac{\sqrt[3]{4}\times\sqrt{2}}{\sqrt[6]{2}}=2^{\frac23+\frac12-\frac16}=2^1=2$.

L’équation $x^3=5$ a pour unique solution réelle $\sqrt[3]5$ ; $x^4=16$ a pour solutions $2$ et $-2$.
:::

:::propriete Limites
$\lim\limits_{x\to+\infty}\sqrt[n]x=+\infty$. Si $\lim u=\ell\ge0$, alors $\lim\sqrt[n]{u}=\sqrt[n]\ell$ ; si $\lim u=+\infty$, alors $\lim\sqrt[n]u=+\infty$.
:::

# Exercices

:::exercice Continuité
Soit $f(x)=\dfrac{\sqrt{x+1}-1}{x}$ si $x\in[-1;0[\cup]0;+\infty[$ et $f(0)=a$. Déterminer $a$ pour que $f$ soit continue en $0$.
:::

:::exercice Raccord
Déterminer le réel $m$ pour que la fonction définie par $f(x)=x^2+mx$ si $x\le2$ et $f(x)=3x-1$ si $x>2$ soit continue en $2$.
:::

:::exercice Valeurs intermédiaires
Montrer que l’équation $x^3+3x-2=0$ admet une unique solution $\alpha$ dans $]0;1[$, puis donner un encadrement de $\alpha$ d’amplitude $0{,}25$.
:::

:::exercice Fonction réciproque
Soit $f(x)=\dfrac{2x-1}{x+1}$ sur $I=]-1;+\infty[$.
1. Montrer que $f$ admet une fonction réciproque définie sur un intervalle $J$ à préciser.
2. Déterminer $f^{-1}(x)$ pour $x\in J$.
:::

:::exercice Racines $n$-ièmes
1. Simplifier $A=\dfrac{\sqrt[3]{9}\times\sqrt[6]{3}}{\sqrt{3}}$ et $B=\sqrt[5]{32}+\sqrt[4]{81}$.
2. Résoudre dans $\mathbb R$ : $x^5=32$ et $\sqrt[3]{x-1}=2$.
3. Calculer $\lim\limits_{x\to+\infty}\left(\sqrt[3]{x^3+1}-x\right)$.
:::

:::exercice Série — fonction racine n-ième
Calculer : $\lim\limits_{x\to+\infty}\left(\sqrt[3]{x^3+1}-x\right)$ et $\lim\limits_{x\to1}\dfrac{\sqrt[3]{x}-1}{x-1}$.
:::

:::exercice Série — théorème des valeurs intermédiaires et bijection
Soit $f(x)=x^3+3x-2$ sur $\mathbb R$.
1. Montrer que $f$ réalise une bijection de $\mathbb R$ sur $\mathbb R$.
2. Montrer que l’équation $f(x)=0$ admet une unique solution $\alpha$ et que $0{,}5<\alpha<1$.
3. Donner le tableau de variations de $f^{-1}$.
:::

:::exercice Approfondissement — point fixe
Soit $f$ une fonction continue sur $[0;1]$ telle que $f([0;1])\subset[0;1]$.
1. On pose $g(x)=f(x)-x$. Calculer le signe de $g(0)$ et de $g(1)$.
2. En déduire que l’équation $f(x)=x$ admet au moins une solution dans $[0;1]$.
3. Application : montrer que $\cos x=x$ admet une solution dans $\left[0;\dfrac{\pi}{2}\right]$.
:::

:::exercice Approfondissement — fonction réciproque explicite
Soit $f(x)=\dfrac{2x}{\sqrt{x^2+1}}$ sur $\mathbb R$.
1. Montrer que $f$ est strictement croissante et que $f(\mathbb R)=]-2;2[$.
2. Déterminer l’expression de $f^{-1}(y)$ pour $y\in]-2;2[$.
:::

# Corrigés

:::corrige
$f(x)=\dfrac{(\sqrt{x+1}-1)(\sqrt{x+1}+1)}{x(\sqrt{x+1}+1)}=\dfrac1{\sqrt{x+1}+1}\to\dfrac12$. Donc $a=\dfrac12$.
:::

:::corrige
$\lim\limits_{x\to2^-}f(x)=f(2)=4+2m$ et $\lim\limits_{x\to2^+}f(x)=5$. Continuité : $4+2m=5$, soit $m=\dfrac12$.
:::

:::corrige
$g(x)=x^3+3x-2$ est continue, $g'(x)=3x^2+3>0$ : strictement croissante ; $g(0)=-2<0$ et $g(1)=2>0$ : solution unique. $g(0{,}5)=0{,}125+1{,}5-2=-0{,}375<0$ et $g(0{,}75)\approx0{,}67>0$ : $0{,}5<\alpha<0{,}75$.
:::

:::corrige
1. $f(x)=2-\dfrac{3}{x+1}$ est continue et strictement croissante sur $I$ ; $\lim\limits_{-1^+}f=-\infty$ et $\lim\limits_{+\infty}f=2$, donc $J=]-\infty;2[$.
2. $y=\dfrac{2x-1}{x+1}\iff y(x+1)=2x-1\iff x(y-2)=-1-y\iff x=\dfrac{1+y}{2-y}$. Donc $f^{-1}(x)=\dfrac{1+x}{2-x}$ sur $]-\infty;2[$.
:::

:::corrige
1. $A=3^{\frac23}\times3^{\frac16}\times3^{-\frac12}=3^{\frac{4+1-3}{6}}=3^{\frac13}=\sqrt[3]3$ ; $B=2+3=5$.
2. $x^5=32\iff x=2$ (la fonction $x\mapsto x^5$ est strictement croissante sur $\mathbb R$). $\sqrt[3]{x-1}=2\iff x-1=8\iff x=9$.
3. Avec $a^3-b^3=(a-b)(a^2+ab+b^2)$, $a=\sqrt[3]{x^3+1}$, $b=x$ : $a-b=\dfrac{1}{a^2+ab+b^2}\to0$.
:::

:::corrige
- Avec $a^3-b^3=(a-b)(a^2+ab+b^2)$ et $a=\sqrt[3]{x^3+1}$, $b=x$ : $a-b=\dfrac{1}{a^2+ab+b^2}\to0$.
- Avec $t=\sqrt[3]x$ : $\dfrac{t-1}{t^3-1}=\dfrac{1}{t^2+t+1}\to\dfrac13$.
:::

:::corrige
1. $f'(x)=3x^2+3>0$ : $f$ est continue et strictement croissante, avec $\lim\limits_{-\infty}f=-\infty$ et $\lim\limits_{+\infty}f=+\infty$ : bijection de $\mathbb R$ sur $\mathbb R$.
2. $0$ a un unique antécédent $\alpha$ ; $f(0{,}5)=-0{,}375<0$ et $f(1)=2>0$, donc $0{,}5<\alpha<1$.
3. $f^{-1}$ est continue et strictement croissante sur $\mathbb R$, de $-\infty$ à $+\infty$, avec $f^{-1}(0)=\alpha$.
:::

:::corrige
1. $g(0)=f(0)\ge0$ et $g(1)=f(1)-1\le0$.
2. $g$ est continue sur $[0;1]$ et change de signe (au sens large) : d’après le TVI, il existe $c$ tel que $g(c)=0$, soit $f(c)=c$.
3. $h(x)=\cos x-x$ est continue, $h(0)=1>0$ et $h\left(\dfrac\pi2\right)=-\dfrac\pi2<0$ : une solution existe.
:::

:::corrige
1. $f'(x)=\dfrac{2}{(x^2+1)\sqrt{x^2+1}}>0$ ; $\lim\limits_{\pm\infty}f=\pm2$ : $f(\mathbb R)=]-2;2[$.
2. $y=\dfrac{2x}{\sqrt{x^2+1}}$ : $x$ et $y$ ont même signe et $y^2(x^2+1)=4x^2$, donc $x^2=\dfrac{y^2}{4-y^2}$ et $f^{-1}(y)=\dfrac{y}{\sqrt{4-y^2}}$.
:::
