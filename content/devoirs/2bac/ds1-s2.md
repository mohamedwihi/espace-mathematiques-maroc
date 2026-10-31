---
id: devoir-2bac-ds1-s2
titre: Devoir surveillé n°1 — Semestre 2
niveau: 2bac
semestre: 2
duree: 2 heures
---

:::remarque Consignes
Calculatrice non programmable autorisée. Le barème est indiqué entre parenthèses. Nombres complexes et fonction exponentielle.
:::


:::exercice Nombres complexes (7 points)
1. Résoudre dans $\mathbb C$ l’équation $z^2-2z+4=0$. (1,5 pt)
2. On pose $a=1+i\sqrt3$ et $b=1-i\sqrt3$.
   a) Écrire $a$ et $b$ sous forme exponentielle. (1 pt)
   b) Calculer $a^6$. (1 pt)
3. Dans le plan complexe, on considère les points $A(a)$, $B(b)$ et la rotation $\mathcal R$ de centre $O$ et d’angle $\dfrac\pi3$.
   a) Donner l’écriture complexe de $\mathcal R$. (1 pt)
   b) Déterminer l’affixe $c$ du point $C=\mathcal R(B)$. (1 pt)
   c) Montrer que le triangle $OBC$ est équilatéral et que $\overrightarrow{OC}=\overrightarrow{OA}+\overrightarrow{OB}$. (1,5 pt)
:::

:::exercice Équations et inéquations (4 points)
Résoudre dans $\mathbb R$ :
1. $e^{2x}-3e^x+2=0$ (1,5 pt)
2. $e^x-e^{-x}>0$ (1 pt)
3. $\ln\left(e^x+1\right)=\ln3$ (1,5 pt)
:::

:::exercice Étude de fonction exponentielle (9 points)
Soit $f(x)=(x+1)e^{-x}$ sur $\mathbb R$.
1. Calculer $\lim\limits_{x\to+\infty}f(x)$ et interpréter graphiquement. (1,5 pt)
2. Calculer $\lim\limits_{x\to-\infty}f(x)$ et $\lim\limits_{x\to-\infty}\dfrac{f(x)}x$ ; interpréter. (1,5 pt)
3. Montrer que $f'(x)=-xe^{-x}$ et dresser le tableau de variations de $f$. (2 pts)
4. Donner l’équation de la tangente à la courbe au point d’abscisse $-1$. (1 pt)
5. a) Vérifier que $F(x)=-(x+2)e^{-x}$ est une primitive de $f$ sur $\mathbb R$. (1 pt)
   b) Calculer l’aire du domaine limité par la courbe, l’axe des abscisses et les droites $x=0$ et $x=1$. (2 pts)
:::

# Corrigés

:::corrige
1. $\Delta'=1-4=-3=\left(i\sqrt3\right)^2$ : $z=1+i\sqrt3$ ou $z=1-i\sqrt3$.
2. a) $a=2e^{i\frac\pi3}$ et $b=2e^{-i\frac\pi3}$. b) $a^6=2^6e^{2i\pi}=64$.
3. a) $z'=e^{i\frac\pi3}z$.
   b) $c=e^{i\frac\pi3}\times2e^{-i\frac\pi3}=2$.
   c) $OB=OC=2$ et $\left(\overrightarrow{OB},\overrightarrow{OC}\right)\equiv\dfrac\pi3$ : $OBC$ est équilatéral. Et $a+b=2=c$ : $\overrightarrow{OC}=\overrightarrow{OA}+\overrightarrow{OB}$ ($OACB$ est un losange).
:::

:::corrige
1. $X=e^x$ : $(X-1)(X-2)=0$, donc $x=0$ ou $x=\ln2$.
2. $e^x>e^{-x}\iff x>-x\iff x>0$.
3. $e^x+1=3\iff x=\ln2$.
:::

:::corrige
1. $f(x)=\dfrac{x}{e^x}+\dfrac1{e^x}\to0$ : l’axe des abscisses est asymptote en $+\infty$.
2. $\lim\limits_{-\infty}f=-\infty$ et $\dfrac{f(x)}x=\left(1+\dfrac1x\right)e^{-x}\to+\infty$ : branche parabolique de direction l’axe des ordonnées.
3. $f'(x)=e^{-x}-(x+1)e^{-x}=-xe^{-x}$ : $f$ croît sur $]-\infty;0]$, décroît sur $[0;+\infty[$ ; maximum $f(0)=1$.
4. $f(-1)=0$ et $f'(-1)=e$ : $y=e(x+1)$.
5. a) $F'(x)=-e^{-x}+(x+2)e^{-x}=(x+1)e^{-x}=f(x)$.
   b) $f\ge0$ sur $[0;1]$ : $\mathcal A=F(1)-F(0)=-\dfrac3e+2=2-\dfrac3e$ u.a.
:::
