---
id: tc-calcul-vectoriel
titre: Calcul vectoriel dans le plan
niveau: tc
semestre: 1
duree: 10 heures
---

## Objectifs
- Maîtriser l’égalité de deux vecteurs et la relation de Chasles.
- Construire et calculer la somme de vecteurs et le produit d’un vecteur par un réel.
- Reconnaître des vecteurs colinéaires ; démontrer un alignement ou un parallélisme.
- Caractériser vectoriellement le milieu d’un segment.

## Prérequis
- Vecteurs et translation (3AC).
- Parallélogramme.
- Théorème de Thalès.

# I. Vecteurs du plan (rappels)

:::definition
Un vecteur non nul $\overrightarrow{AB}$ est caractérisé par sa **direction** (celle de la droite $(AB)$), son **sens** (de $A$ vers $B$) et sa **norme** (la longueur $AB$, notée $\|\overrightarrow{AB}\|$). Le vecteur $\overrightarrow{AA}$ est le vecteur nul $\vec0$.
:::

:::propriete Égalité de deux vecteurs
- $\overrightarrow{AB}=\overrightarrow{CD}$ si et seulement si $ABDC$ est un parallélogramme (éventuellement aplati).
- $\overrightarrow{AB}=\overrightarrow{CD}$ si et seulement si $[AD]$ et $[BC]$ ont le même milieu.
- Pour tout point $O$ et tout vecteur $\vec u$, il existe un unique point $M$ tel que $\overrightarrow{OM}=\vec u$.
:::

# II. Opérations sur les vecteurs

## 1. Somme de deux vecteurs

:::propriete Relation de Chasles
Pour tous points $A$, $B$ et $C$ du plan : $\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$.
:::

:::propriete Règle du parallélogramme
$\overrightarrow{AB}+\overrightarrow{AC}=\overrightarrow{AD}$ si et seulement si $ABDC$ est un parallélogramme.
:::

:::propriete
Pour tous vecteurs $\vec u$, $\vec v$ et $\vec w$ :
- $\vec u+\vec v=\vec v+\vec u$ ; $(\vec u+\vec v)+\vec w=\vec u+(\vec v+\vec w)$ ;
- $\vec u+\vec0=\vec u$ ; $\vec u+(-\vec u)=\vec0$, où $-\overrightarrow{AB}=\overrightarrow{BA}$ ;
- $\vec u-\vec v=\vec u+(-\vec v)$.
:::

:::exemple
Simplifier $\vec w=\overrightarrow{AB}-\overrightarrow{CB}+\overrightarrow{CD}-\overrightarrow{AD}$ :
$$\vec w=\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CD}+\overrightarrow{DA}=\overrightarrow{AA}=\vec0.$$
:::

## 2. Produit d’un vecteur par un réel

:::definition
Soient $\vec u$ un vecteur non nul et $k$ un réel non nul. Le vecteur $k\vec u$ a la **même direction** que $\vec u$, le **même sens** si $k>0$ et le **sens contraire** si $k<0$, et pour norme $\|k\vec u\|=|k|\times\|\vec u\|$. Par convention $0\vec u=\vec0$ et $k\vec0=\vec0$.
:::

:::propriete
Pour tous vecteurs $\vec u$, $\vec v$ et tous réels $k$, $k'$ :
$$k(\vec u+\vec v)=k\vec u+k\vec v\qquad(k+k')\vec u=k\vec u+k'\vec u\qquad k(k'\vec u)=(kk')\vec u\qquad 1\vec u=\vec u.$$
$k\vec u=\vec0$ si et seulement si $k=0$ ou $\vec u=\vec0$.
:::

:::exemple
Simplifier $\vec v=3\left(\vec u-2\vec w\right)-2\left(\vec u-\vec w\right)=3\vec u-6\vec w-2\vec u+2\vec w=\vec u-4\vec w$.
:::

# III. Colinéarité

:::definition
Deux vecteurs $\vec u$ et $\vec v$ sont **colinéaires** si l’un est le produit de l’autre par un réel : il existe $k\in\mathbb R$ tel que $\vec v=k\vec u$ (ou $\vec u=\vec0$). Le vecteur nul est colinéaire à tout vecteur.
:::

:::propriete Applications
- **Alignement** : les points $A$, $B$ et $C$ sont alignés si et seulement si $\overrightarrow{AB}$ et $\overrightarrow{AC}$ sont colinéaires.
- **Parallélisme** : les droites $(AB)$ et $(CD)$ sont parallèles si et seulement si $\overrightarrow{AB}$ et $\overrightarrow{CD}$ sont colinéaires.
:::

:::methode
Pour démontrer un alignement ou un parallélisme, on exprime les vecteurs concernés en fonction de **deux vecteurs de référence** (par exemple $\overrightarrow{AB}$ et $\overrightarrow{AC}$) grâce à la relation de Chasles, puis on cherche $k$ tel que l’un soit $k$ fois l’autre.
:::

:::exemple
$ABC$ est un triangle ; $E$ et $F$ sont définis par $\overrightarrow{AE}=\dfrac32\overrightarrow{AB}$ et $\overrightarrow{CF}=\dfrac12\overrightarrow{CA}+\dfrac32\overrightarrow{AB}$. Montrer que $(EF)\parallel(AC)$.

$\overrightarrow{EF}=\overrightarrow{EA}+\overrightarrow{AC}+\overrightarrow{CF}=-\dfrac32\overrightarrow{AB}+\overrightarrow{AC}-\dfrac12\overrightarrow{AC}+\dfrac32\overrightarrow{AB}=\dfrac12\overrightarrow{AC}$.

$\overrightarrow{EF}$ et $\overrightarrow{AC}$ sont colinéaires, donc $(EF)\parallel(AC)$.
:::

# IV. Milieu d’un segment

:::propriete
Les propositions suivantes sont équivalentes :
1. $I$ est le milieu du segment $[AB]$ ;
2. $\overrightarrow{AI}=\overrightarrow{IB}$ ;
3. $\overrightarrow{IA}+\overrightarrow{IB}=\vec0$ ;
4. $\overrightarrow{AI}=\dfrac12\overrightarrow{AB}$ ;
5. pour tout point $M$ du plan : $\overrightarrow{MA}+\overrightarrow{MB}=2\overrightarrow{MI}$.
:::

:::demonstration De 3 vers 5
$\overrightarrow{MA}+\overrightarrow{MB}=\overrightarrow{MI}+\overrightarrow{IA}+\overrightarrow{MI}+\overrightarrow{IB}=2\overrightarrow{MI}+\left(\overrightarrow{IA}+\overrightarrow{IB}\right)=2\overrightarrow{MI}$.
:::

:::exemple Droite des milieux
Dans un triangle $ABC$, soient $I$ et $J$ les milieux de $[AB]$ et $[AC]$. Alors
$$\overrightarrow{IJ}=\overrightarrow{IA}+\overrightarrow{AJ}=\frac12\overrightarrow{BA}+\frac12\overrightarrow{AC}=\frac12\overrightarrow{BC},$$
donc $(IJ)\parallel(BC)$ et $IJ=\dfrac12BC$.
:::

# Exercices

:::exercice Simplifier
Simplifier : $\vec a=\overrightarrow{MA}-\overrightarrow{MB}+\overrightarrow{AB}$ ; $\vec b=2\left(\overrightarrow{AB}+\overrightarrow{BC}\right)-\overrightarrow{AC}$ ; $\vec c=\overrightarrow{AB}+\overrightarrow{CD}+\overrightarrow{BC}+\overrightarrow{DA}$.
:::

:::exercice Construction
$ABC$ est un triangle. Construire les points $M$, $N$ et $P$ tels que $\overrightarrow{AM}=\overrightarrow{AB}+\overrightarrow{AC}$, $\overrightarrow{BN}=-2\overrightarrow{BC}$ et $\overrightarrow{AP}=\dfrac13\overrightarrow{AB}-\overrightarrow{AC}$. Quelle est la nature de $ABMC$ ?
:::

:::exercice Alignement
$ABC$ est un triangle. On définit $D$ et $E$ par $\overrightarrow{AD}=3\overrightarrow{AB}$ et $\overrightarrow{AE}=2\overrightarrow{AB}+\overrightarrow{BC}$.
1. Exprimer $\overrightarrow{AE}$ en fonction de $\overrightarrow{AB}$ et $\overrightarrow{AC}$.
2. Exprimer $\overrightarrow{DE}$ et $\overrightarrow{DC}$ en fonction de $\overrightarrow{AB}$ et $\overrightarrow{AC}$. Les points $D$, $E$ et $C$ sont-ils alignés ?
:::

:::exercice Parallélogramme
$ABCD$ est un parallélogramme de centre $O$. Montrer que $\overrightarrow{OA}+\overrightarrow{OB}+\overrightarrow{OC}+\overrightarrow{OD}=\vec0$ et que, pour tout point $M$, $\overrightarrow{MA}+\overrightarrow{MC}=\overrightarrow{MB}+\overrightarrow{MD}$.
:::

:::exercice Centre de gravité
$ABC$ est un triangle, $I$ le milieu de $[BC]$ et $G$ le point tel que $\overrightarrow{AG}=\dfrac23\overrightarrow{AI}$. Montrer que $\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec0$.
:::

:::exercice Série — points définis par des égalités
$ABC$ est un triangle. On définit $E$ et $F$ par $\overrightarrow{AE}=\dfrac13\overrightarrow{AB}$ et $\overrightarrow{AF}=\dfrac13\overrightarrow{AC}$.
1. Exprimer $\overrightarrow{EF}$ en fonction de $\overrightarrow{BC}$.
2. En déduire que $(EF)\parallel(BC)$.
:::

:::exercice Série — alignement
$ABC$ est un triangle ; $M$ et $N$ sont définis par $\overrightarrow{AM}=2\overrightarrow{AB}-\overrightarrow{AC}$ et $\overrightarrow{AN}=\dfrac12\overrightarrow{AB}+\dfrac14\overrightarrow{AC}$.
1. Exprimer $\overrightarrow{BM}$ et $\overrightarrow{BN}$ en fonction de $\overrightarrow{AB}$ et $\overrightarrow{AC}$.
2. Les points $B$, $M$ et $N$ sont-ils alignés ?
:::

:::exercice Approfondissement — concours de droites
$ABC$ est un triangle. $I$ est le milieu de $[BC]$, $J$ le point tel que $\overrightarrow{AJ}=\dfrac23\overrightarrow{AC}$ et $K$ celui tel que $\overrightarrow{AK}=2\overrightarrow{AB}$.
1. Exprimer $\overrightarrow{IJ}$ et $\overrightarrow{IK}$ en fonction de $\overrightarrow{AB}$ et $\overrightarrow{AC}$.
2. En déduire que $I$, $J$, $K$ sont alignés.
:::

:::exercice Approfondissement — centre de gravité
$G$ est le point tel que $\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec0$.
1. Montrer que $\overrightarrow{AG}=\dfrac13\left(\overrightarrow{AB}+\overrightarrow{AC}\right)$.
2. En déduire que $G$ est sur la médiane issue de $A$, aux deux tiers à partir de $A$.
:::

# Corrigés

:::corrige
- $\vec a=\overrightarrow{MA}+\overrightarrow{BM}+\overrightarrow{AB}=\overrightarrow{BM}+\overrightarrow{MA}+\overrightarrow{AB}=\overrightarrow{BB}=\vec0$.
- $\vec b=2\overrightarrow{AC}-\overrightarrow{AC}=\overrightarrow{AC}$.
- $\vec c=\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CD}+\overrightarrow{DA}=\vec0$.
:::

:::corrige
$M$ est le quatrième sommet du parallélogramme construit sur $[AB]$ et $[AC]$ : $ABMC$ est un parallélogramme (règle du parallélogramme). $N$ est sur $(BC)$, du côté opposé à $C$ par rapport à $B$, avec $BN=2BC$. $P$ s’obtient en ajoutant à $A$ le vecteur $\dfrac13\overrightarrow{AB}$ puis le vecteur $-\overrightarrow{AC}$.
:::

:::corrige
1. $\overrightarrow{AE}=2\overrightarrow{AB}+\overrightarrow{BA}+\overrightarrow{AC}=\overrightarrow{AB}+\overrightarrow{AC}$.
2. $\overrightarrow{DE}=\overrightarrow{DA}+\overrightarrow{AE}=-3\overrightarrow{AB}+\overrightarrow{AB}+\overrightarrow{AC}=-2\overrightarrow{AB}+\overrightarrow{AC}$ et $\overrightarrow{DC}=\overrightarrow{DA}+\overrightarrow{AC}=-3\overrightarrow{AB}+\overrightarrow{AC}$. S’il existait $k$ avec $\overrightarrow{DE}=k\overrightarrow{DC}$, on aurait $k=1$ (coefficients de $\overrightarrow{AC}$) et $-2=-3k$ : impossible. Les points ne sont pas alignés.
:::

:::corrige
$O$ est le milieu de $[AC]$ et de $[BD]$, donc $\overrightarrow{OA}+\overrightarrow{OC}=\vec0$ et $\overrightarrow{OB}+\overrightarrow{OD}=\vec0$ : la somme est nulle. Puis $\overrightarrow{MA}+\overrightarrow{MC}=2\overrightarrow{MO}=\overrightarrow{MB}+\overrightarrow{MD}$.
:::

:::corrige
$\overrightarrow{GB}+\overrightarrow{GC}=2\overrightarrow{GI}$. Or $\overrightarrow{AG}=\dfrac23\overrightarrow{AI}$ donne $\overrightarrow{GI}=\dfrac13\overrightarrow{AI}$ et $\overrightarrow{GA}=-\dfrac23\overrightarrow{AI}$. Donc $\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=-\dfrac23\overrightarrow{AI}+\dfrac23\overrightarrow{AI}=\vec0$.
:::

:::corrige
1. $\overrightarrow{EF}=\overrightarrow{EA}+\overrightarrow{AF}=-\dfrac13\overrightarrow{AB}+\dfrac13\overrightarrow{AC}=\dfrac13\left(\overrightarrow{BA}+\overrightarrow{AC}\right)=\dfrac13\overrightarrow{BC}$.
2. Les vecteurs $\overrightarrow{EF}$ et $\overrightarrow{BC}$ sont colinéaires : $(EF)\parallel(BC)$.
:::

:::corrige
1. $\overrightarrow{BM}=\overrightarrow{BA}+\overrightarrow{AM}=\overrightarrow{AB}-\overrightarrow{AC}$ ; $\overrightarrow{BN}=-\dfrac12\overrightarrow{AB}+\dfrac14\overrightarrow{AC}$.
2. $\overrightarrow{BN}=-\dfrac12\overrightarrow{AB}+\dfrac14\overrightarrow{AC}$ n’est pas un multiple de $\overrightarrow{AB}-\overrightarrow{AC}$ : il faudrait $k=-\dfrac12$ et $-k=\dfrac14$, impossible. Les points ne sont pas alignés.
:::

:::corrige
1. $\overrightarrow{AI}=\dfrac12\overrightarrow{AB}+\dfrac12\overrightarrow{AC}$. $\overrightarrow{IJ}=\overrightarrow{AJ}-\overrightarrow{AI}=-\dfrac12\overrightarrow{AB}+\dfrac16\overrightarrow{AC}$ ; $\overrightarrow{IK}=\overrightarrow{AK}-\overrightarrow{AI}=\dfrac32\overrightarrow{AB}-\dfrac12\overrightarrow{AC}$.
2. $\overrightarrow{IK}=-3\overrightarrow{IJ}$ : les vecteurs sont colinéaires, les points sont alignés.
:::

:::corrige
1. $\overrightarrow{GA}+\left(\overrightarrow{GA}+\overrightarrow{AB}\right)+\left(\overrightarrow{GA}+\overrightarrow{AC}\right)=\vec0$, donc $3\overrightarrow{AG}=\overrightarrow{AB}+\overrightarrow{AC}$.
2. Avec $A'$ milieu de $[BC]$ : $\overrightarrow{AB}+\overrightarrow{AC}=2\overrightarrow{AA'}$, donc $\overrightarrow{AG}=\dfrac23\overrightarrow{AA'}$.
:::
