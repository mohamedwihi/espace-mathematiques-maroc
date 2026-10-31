---
id: 1bac-trigonometrie
titre: Calcul trigonométrique
niveau: 1bac
semestre: 1
duree: 12 heures
---

## Objectifs
- Connaître et utiliser les formules d’addition et de duplication.
- Exprimer $\cos^2x$, $\sin^2x$ et $\cos x$, $\sin x$, $\tan x$ en fonction de $\tan\dfrac x2$.
- Transformer $a\cos x+b\sin x$ en $r\cos(x-\varphi)$.
- Résoudre des équations et inéquations trigonométriques.

## Prérequis
- Cercle trigonométrique, lignes trigonométriques, angles remarquables (tronc commun).
- Relations entre les angles ; équations élémentaires.
- Produit scalaire.

# I. Formules d’addition

:::theoreme
Pour tous réels $a$ et $b$ :
$$\cos(a-b)=\cos a\cos b+\sin a\sin b\qquad\cos(a+b)=\cos a\cos b-\sin a\sin b$$
$$\sin(a+b)=\sin a\cos b+\cos a\sin b\qquad\sin(a-b)=\sin a\cos b-\cos a\sin b$$
et, lorsque les tangentes existent :
$$\tan(a+b)=\frac{\tan a+\tan b}{1-\tan a\tan b}\qquad\tan(a-b)=\frac{\tan a-\tan b}{1+\tan a\tan b}.$$
:::

:::demonstration Formule de $\cos(a-b)$
Soient $\vec u(\cos a;\sin a)$ et $\vec v(\cos b;\sin b)$, unitaires, avec $\left(\vec v,\vec u\right)\equiv a-b$. Le produit scalaire donne $\vec u\cdot\vec v=\cos(a-b)$ et, analytiquement, $\vec u\cdot\vec v=\cos a\cos b+\sin a\sin b$. Les autres formules s’en déduisent en remplaçant $b$ par $-b$ ou $a$ par $\dfrac\pi2-a$.
:::

:::exemple
$$\cos\frac{\pi}{12}=\cos\left(\frac\pi3-\frac\pi4\right)=\frac12\times\frac{\sqrt2}2+\frac{\sqrt3}2\times\frac{\sqrt2}2=\frac{\sqrt2+\sqrt6}4.$$
$$\sin\frac{\pi}{12}=\sin\left(\frac\pi3-\frac\pi4\right)=\frac{\sqrt3}2\times\frac{\sqrt2}2-\frac12\times\frac{\sqrt2}2=\frac{\sqrt6-\sqrt2}4.$$
:::

# II. Formules de duplication

:::propriete
Pour tout réel $a$ :
$$\sin2a=2\sin a\cos a\qquad\cos2a=\cos^2a-\sin^2a=2\cos^2a-1=1-2\sin^2a$$
$$\tan2a=\frac{2\tan a}{1-\tan^2a}.$$
On en déduit les formules de **linéarisation** :
$$\cos^2a=\frac{1+\cos2a}2\qquad\sin^2a=\frac{1-\cos2a}2.$$
:::

:::exemple
$\cos^2\dfrac\pi8=\dfrac{1+\cos\frac\pi4}{2}=\dfrac{2+\sqrt2}{4}$, et comme $\cos\dfrac\pi8>0$ : $\cos\dfrac\pi8=\dfrac{\sqrt{2+\sqrt2}}2$.
:::

:::propriete Expression en fonction de $t=\tan\dfrac x2$
Pour $x\ne\pi+2k\pi$ :
$$\cos x=\frac{1-t^2}{1+t^2}\qquad\sin x=\frac{2t}{1+t^2}\qquad\tan x=\frac{2t}{1-t^2}\ (t^2\ne1).$$
:::

# III. Transformation de $a\cos x+b\sin x$

:::propriete
Soient $a$ et $b$ deux réels non tous nuls et $r=\sqrt{a^2+b^2}$. Il existe un réel $\varphi$ tel que $\cos\varphi=\dfrac ar$ et $\sin\varphi=\dfrac br$, et pour tout réel $x$ :
$$a\cos x+b\sin x=r\cos(x-\varphi).$$
:::

:::exemple
$\cos x+\sqrt3\sin x$ : $r=2$, $\cos\varphi=\dfrac12$, $\sin\varphi=\dfrac{\sqrt3}2$, donc $\varphi=\dfrac\pi3$ et $\cos x+\sqrt3\sin x=2\cos\left(x-\dfrac\pi3\right)$.
:::

:::remarque
On en déduit que $-r\le a\cos x+b\sin x\le r$ pour tout $x$ : la valeur maximale est $r$, la valeur minimale $-r$.
:::

# IV. Équations trigonométriques

:::propriete
Pour tous réels $x$ et $\alpha$ (avec $k\in\mathbb Z$) :
- $\cos x=\cos\alpha\iff x=\alpha+2k\pi$ ou $x=-\alpha+2k\pi$ ;
- $\sin x=\sin\alpha\iff x=\alpha+2k\pi$ ou $x=\pi-\alpha+2k\pi$ ;
- $\tan x=\tan\alpha\iff x=\alpha+k\pi$ (avec $x\ne\dfrac\pi2+k\pi$).
:::

:::methode Équation $a\cos x+b\sin x=c$
On écrit le premier membre sous la forme $r\cos(x-\varphi)$, puis on résout $\cos(x-\varphi)=\dfrac cr$ (si $\left|\dfrac cr\right|\le1$, sinon pas de solution).
:::

:::exemple
Résoudre $\cos x+\sqrt3\sin x=\sqrt2$ dans $\mathbb R$.

$2\cos\left(x-\dfrac\pi3\right)=\sqrt2\iff\cos\left(x-\dfrac\pi3\right)=\cos\dfrac\pi4\iff x-\dfrac\pi3=\pm\dfrac\pi4+2k\pi$. Donc $x=\dfrac{7\pi}{12}+2k\pi$ ou $x=\dfrac{\pi}{12}+2k\pi$.
:::

:::exemple Équation se ramenant au second degré
$2\sin^2x+\sin x-1=0$ : avec $X=\sin x$, $2X^2+X-1=0$, d’où $X=\dfrac12$ ou $X=-1$. Dans $[0;2\pi[$ : $S=\left\{\dfrac\pi6;\dfrac{5\pi}6;\dfrac{3\pi}2\right\}$.
:::

:::exemple Avec une formule de duplication
$\sin2x=\cos x\iff\cos x(2\sin x-1)=0\iff\cos x=0$ ou $\sin x=\dfrac12$. Dans $[0;2\pi[$ : $S=\left\{\dfrac\pi6;\dfrac\pi2;\dfrac{5\pi}6;\dfrac{3\pi}2\right\}$.
:::

# V. Inéquations trigonométriques

:::methode
On résout l’équation associée sur l’intervalle d’étude, puis on lit les solutions sur le cercle trigonométrique (abscisses pour $\cos$, ordonnées pour $\sin$). Pour une inéquation plus complexe, on factorise et on dresse un **tableau de signes**.
:::

:::exemple
Résoudre $2\cos x+\sqrt3>0$ dans $]-\pi;\pi]$ : $\cos x>-\dfrac{\sqrt3}2$, et $\cos x=-\dfrac{\sqrt3}2$ pour $x=\pm\dfrac{5\pi}6$. Donc $S=\left]-\dfrac{5\pi}6;\dfrac{5\pi}6\right[$.
:::

:::exemple
Résoudre $\cos x+\sqrt3\sin x\ge1$ dans $[0;2\pi[$ : $\cos\left(x-\dfrac\pi3\right)\ge\dfrac12$, soit $-\dfrac\pi3\le x-\dfrac\pi3\le\dfrac\pi3$ (modulo $2\pi$), donc $S=\left[0;\dfrac{2\pi}3\right]$.
:::

# Exercices

:::exercice Valeurs exactes
Calculer $\cos\dfrac{5\pi}{12}$, $\sin\dfrac{5\pi}{12}$ et $\tan\dfrac{\pi}{12}$.
:::

:::exercice Duplication
Sachant que $\cos a=\dfrac35$ et $a\in\left]0;\dfrac\pi2\right[$, calculer $\sin a$, $\sin2a$, $\cos2a$ et $\tan2a$.
:::

:::exercice Identités
Montrer que pour tout réel $x$ : $\cos^4x-\sin^4x=\cos2x$ et $\dfrac{\sin2x}{1+\cos2x}=\tan x$ (là où elle est définie).
:::

:::exercice Transformation
Écrire $\sqrt3\cos x-\sin x$ sous la forme $r\cos(x-\varphi)$, puis résoudre dans $[0;2\pi[$ l’équation $\sqrt3\cos x-\sin x=\sqrt2$.
:::

:::exercice Équations et inéquations
Résoudre dans $[0;2\pi[$ : $\cos2x=\cos x$ ; $2\cos^2x-3\cos x+1=0$ ; $2\sin x-\sqrt2<0$.
:::

:::exercice Série — formules d’addition
Calculer $\cos\dfrac{\pi}{12}$ et $\sin\dfrac{\pi}{12}$ en écrivant $\dfrac{\pi}{12}=\dfrac{\pi}{3}-\dfrac{\pi}{4}$.
:::

:::exercice Série — transformation
1. Écrire $\sqrt3\cos x-\sin x$ sous la forme $r\cos(x+\varphi)$.
2. Résoudre dans $[0;2\pi[$ l’équation $\sqrt3\cos x-\sin x=1$.
:::

:::exercice Approfondissement — transformation de somme
1. Montrer que $\cos x+\cos3x=2\cos2x\cos x$.
2. Résoudre dans $[0;\pi]$ l’équation $\cos x+\cos2x+\cos3x=0$.
:::

:::exercice Approfondissement — valeur exacte
1. Calculer $\cos\dfrac{\pi}{8}$ à l’aide de $\cos2a=2\cos^2a-1$.
2. En déduire $\tan\dfrac{\pi}{8}=\sqrt2-1$.
:::

# Corrigés

:::corrige
$\cos\dfrac{5\pi}{12}=\cos\left(\dfrac\pi4+\dfrac\pi6\right)=\dfrac{\sqrt2}2\cdot\dfrac{\sqrt3}2-\dfrac{\sqrt2}2\cdot\dfrac12=\dfrac{\sqrt6-\sqrt2}4$ ; $\sin\dfrac{5\pi}{12}=\dfrac{\sqrt6+\sqrt2}4$ ; $\tan\dfrac\pi{12}=\tan\left(\dfrac\pi3-\dfrac\pi4\right)=\dfrac{\sqrt3-1}{1+\sqrt3}=2-\sqrt3$.
:::

:::corrige
$\sin a=\dfrac45$ ; $\sin2a=2\times\dfrac45\times\dfrac35=\dfrac{24}{25}$ ; $\cos2a=\dfrac9{25}-\dfrac{16}{25}=-\dfrac7{25}$ ; $\tan2a=\dfrac{24/25}{-7/25}=-\dfrac{24}7$.
:::

:::corrige
- $\cos^4x-\sin^4x=\left(\cos^2x-\sin^2x\right)\left(\cos^2x+\sin^2x\right)=\cos2x$.
- $\dfrac{\sin2x}{1+\cos2x}=\dfrac{2\sin x\cos x}{2\cos^2x}=\dfrac{\sin x}{\cos x}=\tan x$.
:::

:::corrige
$r=2$, $\cos\varphi=\dfrac{\sqrt3}2$, $\sin\varphi=-\dfrac12$ : $\varphi=-\dfrac\pi6$ et $\sqrt3\cos x-\sin x=2\cos\left(x+\dfrac\pi6\right)$. L’équation donne $\cos\left(x+\dfrac\pi6\right)=\dfrac{\sqrt2}2$, soit $x+\dfrac\pi6=\pm\dfrac\pi4+2k\pi$ : $x=\dfrac\pi{12}+2k\pi$ ou $x=-\dfrac{5\pi}{12}+2k\pi$. Dans $[0;2\pi[$ : $S=\left\{\dfrac\pi{12};\dfrac{19\pi}{12}\right\}$.
:::

:::corrige
- $\cos2x=\cos x\iff2x=\pm x+2k\pi\iff x=2k\pi$ ou $x=\dfrac{2k\pi}3$ : $S=\left\{0;\dfrac{2\pi}3;\dfrac{4\pi}3\right\}$.
- $X=\cos x$ : $2X^2-3X+1=0$, $X=1$ ou $X=\dfrac12$ : $S=\left\{0;\dfrac\pi3;\dfrac{5\pi}3\right\}$.
- $\sin x<\dfrac{\sqrt2}2$ : $S=\left[0;\dfrac\pi4\right[\cup\left]\dfrac{3\pi}4;2\pi\right[$.
:::

:::corrige
$\cos\dfrac\pi{12}=\cos\dfrac\pi3\cos\dfrac\pi4+\sin\dfrac\pi3\sin\dfrac\pi4=\dfrac{\sqrt2+\sqrt6}{4}$ ; $\sin\dfrac\pi{12}=\sin\dfrac\pi3\cos\dfrac\pi4-\cos\dfrac\pi3\sin\dfrac\pi4=\dfrac{\sqrt6-\sqrt2}{4}$.
:::

:::corrige
1. $r=\sqrt{3+1}=2$ : $\sqrt3\cos x-\sin x=2\left(\dfrac{\sqrt3}2\cos x-\dfrac12\sin x\right)=2\cos\left(x+\dfrac\pi6\right)$.
2. $\cos\left(x+\dfrac\pi6\right)=\dfrac12$ : $x+\dfrac\pi6=\pm\dfrac\pi3+2k\pi$, soit $x=\dfrac\pi6+2k\pi$ ou $x=-\dfrac\pi2+2k\pi$. Dans $[0;2\pi[$ : $S=\left\{\dfrac\pi6;\dfrac{3\pi}2\right\}$.
:::

:::corrige
1. $\cos(2x+x)+\cos(2x-x)=2\cos2x\cos x$.
2. $\cos2x(2\cos x+1)=0$ : $\cos2x=0$ donne $x=\dfrac\pi4$ ou $\dfrac{3\pi}4$ ; $\cos x=-\dfrac12$ donne $x=\dfrac{2\pi}3$.
:::

:::corrige
1. $2\cos^2\dfrac\pi8-1=\dfrac{\sqrt2}2$, donc $\cos\dfrac\pi8=\dfrac{\sqrt{2+\sqrt2}}2$.
2. $\tan a=\dfrac{\sin2a}{1+\cos2a}$ : $\tan\dfrac\pi8=\dfrac{\frac{\sqrt2}2}{1+\frac{\sqrt2}2}=\dfrac{\sqrt2}{2+\sqrt2}=\sqrt2-1$.
:::
