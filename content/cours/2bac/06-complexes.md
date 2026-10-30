---
id: 2bac-complexes
titre: Les nombres complexes
niveau: 2bac
semestre: 1
duree: 20 heures
---

## Objectifs
- Calculer avec les nombres complexes sous forme algébrique ; utiliser le conjugué et le module.
- Représenter un complexe dans le plan ; interpréter géométriquement module et argument.
- Passer de la forme algébrique aux formes trigonométrique et exponentielle ; utiliser les formules de Moivre et d’Euler.
- Résoudre une équation du second degré à coefficients réels.
- Écrire et utiliser l’écriture complexe d’une translation, d’une homothétie, d’une rotation ; résoudre des problèmes de géométrie.

## Prérequis
- Trigonométrie, angles orientés.
- Vecteurs, repère orthonormé.
- Équations du second degré ; transformations du plan.

# I. Forme algébrique

:::definition
Il existe un ensemble noté $\mathbb C$, contenant $\mathbb R$, muni d’une addition et d’une multiplication ayant les mêmes propriétés que dans $\mathbb R$, et contenant un élément $i$ tel que $i^2=-1$. Tout **nombre complexe** $z$ s’écrit de manière **unique**
$$z=a+ib\qquad(a,b\in\mathbb R).$$
$a=\mathrm{Re}(z)$ est la **partie réelle**, $b=\mathrm{Im}(z)$ la **partie imaginaire**. Si $b=0$, $z$ est réel ; si $a=0$, $z$ est **imaginaire pur**.
:::

:::propriete
$a+ib=a'+ib'\iff a=a'$ et $b=b'$. En particulier $a+ib=0\iff a=b=0$.
:::

:::exemple
$(2+3i)(1-i)=2-2i+3i-3i^2=5+i$ ; $(1+i)^2=2i$ ; $\dfrac{1}{i}=-i$.
:::

# II. Représentation géométrique

:::definition
Le plan est muni d’un repère orthonormé direct $(O,\vec u,\vec v)$. Au complexe $z=a+ib$, on associe le point $M(a;b)$ et le vecteur $\overrightarrow{OM}(a;b)$ : $z$ est l’**affixe** de $M$ (et de $\overrightarrow{OM}$), et $M$ est l’**image** de $z$.
:::

:::propriete
- L’affixe de $\overrightarrow{AB}$ est $z_B-z_A$.
- L’affixe du milieu de $[AB]$ est $\dfrac{z_A+z_B}2$.
- $\overrightarrow{AB}=\overrightarrow{CD}\iff z_B-z_A=z_D-z_C$.
:::

# III. Conjugué et module

:::definition
Le **conjugué** de $z=a+ib$ est $\bar z=a-ib$. Le **module** de $z$ est le réel positif $|z|=\sqrt{a^2+b^2}$.
:::

:::propriete Conjugué
- $\overline{z+z'}=\bar z+\bar z'$ ; $\overline{zz'}=\bar z\,\bar z'$ ; $\overline{\left(\dfrac z{z'}\right)}=\dfrac{\bar z}{\bar z'}$ ; $\overline{z^n}=\bar z^n$.
- $z+\bar z=2\mathrm{Re}(z)$ et $z-\bar z=2i\,\mathrm{Im}(z)$.
- $z\in\mathbb R\iff\bar z=z$ ; $z$ imaginaire pur $\iff\bar z=-z$.
- $z\bar z=a^2+b^2=|z|^2$.
:::

:::methode Écrire un quotient sous forme algébrique
On multiplie numérateur et dénominateur par le **conjugué du dénominateur** :
$$\frac{3+i}{1-2i}=\frac{(3+i)(1+2i)}{1+4}=\frac{3+6i+i-2}{5}=\frac15+\frac75i.$$
:::

:::propriete Module
- $|z|=OM$ ; $|z_B-z_A|=AB$.
- $|zz'|=|z||z'|$ ; $\left|\dfrac z{z'}\right|=\dfrac{|z|}{|z'|}$ ; $|z^n|=|z|^n$ ; $|\bar z|=|-z|=|z|$.
- $|z+z'|\le|z|+|z'|$ (inégalité triangulaire).
:::

# IV. Argument et forme trigonométrique

:::definition
Soit $z\ne0$ d’image $M$. Un **argument** de $z$, noté $\arg z$, est une mesure de l’angle orienté $\left(\vec u,\overrightarrow{OM}\right)$ ; il est défini à $2k\pi$ près.
:::

:::propriete Forme trigonométrique
Tout complexe non nul s’écrit $z=r(\cos\theta+i\sin\theta)$ avec $r=|z|>0$ et $\theta\equiv\arg z\ [2\pi]$. Si $z=a+ib$ : $\cos\theta=\dfrac ar$ et $\sin\theta=\dfrac br$.
:::

:::exemple
$z=1-i\sqrt3$ : $r=2$, $\cos\theta=\dfrac12$, $\sin\theta=-\dfrac{\sqrt3}2$, donc $\theta\equiv-\dfrac\pi3$ et $z=2\left(\cos\left(-\dfrac\pi3\right)+i\sin\left(-\dfrac\pi3\right)\right)$.
:::

:::propriete Argument et opérations
Pour $z$, $z'$ non nuls et $n\in\mathbb Z$ :
$$\arg(zz')\equiv\arg z+\arg z'\qquad\arg\frac z{z'}\equiv\arg z-\arg z'\qquad\arg z^n\equiv n\arg z\qquad\arg\bar z\equiv-\arg z\qquad\arg(-z)\equiv\pi+\arg z.$$
Et $\left(\overrightarrow{AB},\overrightarrow{CD}\right)\equiv\arg\dfrac{z_D-z_C}{z_B-z_A}\ [2\pi]$.
:::

# V. Forme exponentielle — Moivre et Euler

:::definition
Pour tout réel $\theta$, on note $e^{i\theta}=\cos\theta+i\sin\theta$. Tout complexe non nul s’écrit $z=re^{i\theta}$ avec $r=|z|$ et $\theta\equiv\arg z$ : c’est la **forme exponentielle**.
:::

:::propriete
$e^{i\theta}e^{i\theta'}=e^{i(\theta+\theta')}$ ; $\dfrac{e^{i\theta}}{e^{i\theta'}}=e^{i(\theta-\theta')}$ ; $\overline{e^{i\theta}}=e^{-i\theta}$ ; $\left(e^{i\theta}\right)^n=e^{in\theta}$.
- **Formule de Moivre** : $(\cos\theta+i\sin\theta)^n=\cos n\theta+i\sin n\theta$.
- **Formules d’Euler** : $\cos\theta=\dfrac{e^{i\theta}+e^{-i\theta}}2$ et $\sin\theta=\dfrac{e^{i\theta}-e^{-i\theta}}{2i}$.
:::

:::exemple
$\left(1+i\right)^{8}=\left(\sqrt2e^{i\frac\pi4}\right)^8=16e^{2i\pi}=16$.

Linéarisation : $\cos^2\theta=\left(\dfrac{e^{i\theta}+e^{-i\theta}}2\right)^2=\dfrac{e^{2i\theta}+2+e^{-2i\theta}}4=\dfrac{1+\cos2\theta}2$.
:::

# VI. Équations du second degré à coefficients réels

:::theoreme
Soit $az^2+bz+c=0$ avec $a$, $b$, $c$ réels, $a\ne0$, et $\Delta=b^2-4ac$.
- Si $\Delta>0$ : deux solutions réelles $\dfrac{-b\pm\sqrt\Delta}{2a}$.
- Si $\Delta=0$ : une solution réelle double $-\dfrac b{2a}$.
- Si $\Delta<0$ : deux solutions complexes **conjuguées** $z_1=\dfrac{-b-i\sqrt{-\Delta}}{2a}$ et $z_2=\dfrac{-b+i\sqrt{-\Delta}}{2a}$.

Dans tous les cas : $z_1+z_2=-\dfrac ba$ et $z_1z_2=\dfrac ca$.
:::

:::exemple
$z^2-2z+5=0$ : $\Delta=-16=(4i)^2$, donc $z=1-2i$ ou $z=1+2i$.

$z^2-2\sqrt3z+4=0$ : $\Delta=-4$, $z=\sqrt3\pm i=2e^{\pm i\frac\pi6}$.
:::

# VII. Écriture complexe des transformations

:::propriete
Soit $M'(z')$ l’image de $M(z)$.
| Transformation | Écriture complexe |
|---|---|
| translation de vecteur $\vec w(b)$ | $z'=z+b$ |
| homothétie de centre $\Omega(\omega)$ et de rapport $k$ | $z'-\omega=k(z-\omega)$ |
| rotation de centre $\Omega(\omega)$ et d’angle $\theta$ | $z'-\omega=e^{i\theta}(z-\omega)$ |
:::

:::exemple
La rotation de centre $\Omega(1+i)$ et d’angle $\dfrac\pi2$ : $z'=1+i+i(z-1-i)=iz+2$. L’image de $A(2)$ est $A'(2+2i)$.

L’écriture $z'=2z-1$ est celle de l’homothétie de rapport $2$ et de centre $\omega$ tel que $\omega=2\omega-1$, soit $\omega=1$.
:::

# VIII. Nombres complexes et géométrie

:::propriete
- $A$, $B$, $C$ (distincts) sont **alignés** $\iff\dfrac{z_C-z_A}{z_B-z_A}\in\mathbb R$.
- $(AB)\perp(AC)\iff\dfrac{z_C-z_A}{z_B-z_A}$ est **imaginaire pur**.
- Si $\dfrac{z_C-z_A}{z_B-z_A}=e^{i\frac\pi3}$, le triangle $ABC$ est **équilatéral** ; si $\dfrac{z_C-z_A}{z_B-z_A}=\pm i$, il est **rectangle isocèle** en $A$.
- L’ensemble des points $M(z)$ tels que $|z-z_A|=r$ ($r>0$) est le **cercle** de centre $A$ et de rayon $r$ ; tels que $|z-z_A|=|z-z_B|$, la **médiatrice** de $[AB]$.
:::

:::exemple
$A(\sqrt3+i)$, $B(\sqrt3-i)$ : $\dfrac{z_B-0}{z_A-0}=\dfrac{2e^{-i\frac\pi6}}{2e^{i\frac\pi6}}=e^{-i\frac\pi3}$ : $OA=OB$ et $\left(\overrightarrow{OA},\overrightarrow{OB}\right)\equiv-\dfrac\pi3$, donc $OAB$ est **équilatéral**.
:::

# Exercices

:::exercice Forme algébrique
Écrire sous forme algébrique : $z_1=(2-i)^2$ ; $z_2=(1+i)(3-2i)$ ; $z_3=\dfrac{2+i}{1+i}$ ; $z_4=\dfrac{1}{(1-i)^2}$.
:::

:::exercice Module et argument
Écrire sous forme trigonométrique puis exponentielle : $z_1=1+i$ ; $z_2=-\sqrt3+i$ ; $z_3=-3i$. En déduire la forme exponentielle de $z_1z_2$ et de $\dfrac{z_1}{z_2}$.
:::

:::exercice Équations
Résoudre dans $\mathbb C$ : $z^2+4=0$ ; $z^2-4z+13=0$ ; $2z+i\bar z=3$.
:::

:::exercice Rotation
$A(1+i)$ et $B(3+2i)$. On considère la rotation $R$ de centre $A$ et d’angle $\dfrac\pi2$.
1. Donner l’écriture complexe de $R$.
2. Déterminer l’affixe de $C=R(B)$ et la nature du triangle $ABC$.
:::

:::exercice Ensembles de points
Déterminer l’ensemble des points $M(z)$ tels que : $|z-2i|=3$ ; $|z-1|=|z+i|$.
:::

# Corrigés

:::corrige
$z_1=4-4i-1=3-4i$ ; $z_2=3-2i+3i+2=5+i$ ; $z_3=\dfrac{(2+i)(1-i)}{2}=\dfrac{3-i}2$ ; $(1-i)^2=-2i$, donc $z_4=\dfrac1{-2i}=\dfrac i2$.
:::

:::corrige
$z_1=\sqrt2\left(\cos\dfrac\pi4+i\sin\dfrac\pi4\right)=\sqrt2e^{i\frac\pi4}$ ; $z_2=2\left(\cos\dfrac{5\pi}6+i\sin\dfrac{5\pi}6\right)=2e^{i\frac{5\pi}6}$ ; $z_3=3e^{-i\frac\pi2}$. Puis $z_1z_2=2\sqrt2e^{i\frac{13\pi}{12}}$ et $\dfrac{z_1}{z_2}=\dfrac{\sqrt2}2e^{-i\frac{7\pi}{12}}$.
:::

:::corrige
- $z^2=-4=(2i)^2$ : $z=2i$ ou $z=-2i$.
- $\Delta=16-52=-36$ : $z=2\pm3i$.
- Avec $z=x+iy$ : $2x+2iy+i(x-iy)=3$, soit $(2x+y)+i(2y+x)=3$. Donc $2x+y=3$ et $x+2y=0$ : $x=2$, $y=-1$, $z=2-i$.
:::

:::corrige
1. $z'-(1+i)=i\left(z-(1+i)\right)$, soit $z'=iz+2$.
2. $z_C=i(3+2i)+2=3i$. $AC=AB$ et $(\overrightarrow{AB},\overrightarrow{AC})\equiv\dfrac\pi2$ : $ABC$ est rectangle isocèle en $A$.
:::

:::corrige
- Cercle de centre le point d’affixe $2i$ et de rayon $3$.
- $|z-1|=|z-(-i)|$ : médiatrice du segment joignant les points d’affixes $1$ et $-i$, c’est-à-dire la droite $y=-x$.
:::
