import React, { useState } from 'react';
import './App.css';
import { Mistral } from '@mistralai/mistralai';

const apiKey = process.env.MISTRAL_API_KEY || 'Q9wYLD8kvpWmXkYdpeDYGjpwfEbvAxOV';

const client = new Mistral({ apiKey: apiKey });

function App() {
  const [response, setResponse] = useState(""); // State for chat response
  const [userInput, setUserInput] = useState("Hi there!"); // State for user input

  // Handles user input changes
  function handleChange(event) { 
    setUserInput(event.target.value);
  }

  // Handles form submission and fetches chatbot response
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents page reload on form submit

    try {
      // Call the chat API with the user's input
      const chatResponse = await client.chat.complete({
        model: 'mistral-tiny',
        messages: [
          { role: 'system', content: `From now on, you are the perfect tutor for kids. Be kind and ask them how their day is going and what grade they are in. As soon as you can, ask them what they are learning in class and quiz them to see how much they know. Correct them and make it fun. DONT USE LONG SENTENCES UNLESS THEY ASK YOU FOR IT
            
            THE CONTENT YOU SHOULD HAVE IN MIND IS:
            Year 6: Detail of content to be introduced (statutory requirement)
Word The difference between vocabulary typical of informal speech and
vocabulary appropriate for formal speech and writing [for example, find
out – discover; ask for – request; go in – enter]
How words are related by meaning as synonyms and antonyms [for
example, big, large, little].
Sentence Use of the passive to affect the presentation of information in a
sentence [for example, I broke the window in the greenhouse versus
The window in the greenhouse was broken (by me)].
The difference between structures typical of informal speech and
structures appropriate for formal speech and writing [for example, the
use of question tags: He’s your friend, isn’t he?, or the use of
subjunctive forms such as If I were or Were they to come in some very
formal writing and speech]
English
79
Year 6: Detail of content to be introduced (statutory requirement)
Text Linking ideas across paragraphs using a wider range of cohesive
devices: repetition of a word or phrase, grammatical connections [for
example, the use of adverbials such as on the other hand, in contrast,
or as a consequence], and ellipsis
Layout devices [for example, headings, sub-headings, columns, bullets,
or tables, to structure text]
Punctuation Use of the semi-colon, colon and dash to mark the boundary between
independent clauses [for example, It’s raining; I’m fed up]
Use of the colon to introduce a list and use of semi-colons within lists
Punctuation of bullet points to list information
How hyphens can be used to avoid ambiguity [for example, man eating
shark versus man-eating shark, or recover versus re-cover]
Terminology
for pupils
subject, object
active, passive
synonym, antonym
ellipsis, hyphen, colon, semi-colon, bullet points

Year 6: Detail of content to be introduced (statutory requirement)
Text Linking ideas across paragraphs using a wider range of cohesive
devices: repetition of a word or phrase, grammatical connections [for
example, the use of adverbials such as on the other hand, in contrast,
or as a consequence], and ellipsis
Layout devices [for example, headings, sub-headings, columns, bullets,
or tables, to structure text]
Punctuation Use of the semi-colon, colon and dash to mark the boundary between
independent clauses [for example, It’s raining; I’m fed up]
Use of the colon to introduce a list and use of semi-colons within lists
Punctuation of bullet points to list information
How hyphens can be used to avoid ambiguity [for example, man eating
shark versus man-eating shark, or recover versus re-cover]
Terminology
for pupils
subject, object
active, passive
synonym, antonym
ellipsis, hyphen, colon, semi-colon, bullet points
English
80
Glossary for the programmes of study for English
(non-statutory)
The following glossary includes all the technical grammatical terms used in the
programmes of study for English, as well as others that might be useful. It is intended as
an aid for teachers, not as the body of knowledge that should be learnt by pupils. Apart
from a few which are used only in schools (for example, root word), the terms below are
used with the meanings defined here in most modern books on English grammar. It is
recognised that there are different schools of thought on grammar, but the terms defined
here clarify those being used in the programmes of study. For further details, teachers
should consult the many books that are available.
Terms in definitions
As in any tightly structured area of knowledge, grammar, vocabulary and spelling involve a
network of technical concepts that help to define each other. Consequently, the definition
of one concept builds on other concepts that are equally technical. Concepts that are
defined elsewhere in the glossary are hyperlinked. For some concepts, the technical
definition may be slightly different from the meaning that some teachers may have learnt at
school or may have been using with their own pupils; in these cases, the more familiar
meaning is also discussed.
Term Guidance Example
active voice An active verb has its usual pattern
of subject and object (in contrast with
the passive).
Active: The school arranged a visit.
Passive: A visit was arranged by
the school.
adjective The surest way to identify adjectives
is by the ways they can be used:
 before a noun, to make the
noun’s meaning more specific
(i.e. to modify the noun), or
 after the verb be, as its
complement.
Adjectives cannot be modified by
other adjectives. This distinguishes
them from nouns, which can be.
Adjectives are sometimes called
‘describing words’ because they pick
out single characteristics such as
size or colour. This is often true, but
it doesn’t help to distinguish
adjectives from other word classes,
The pupils did some really good
work. [adjective used before a
noun, to modify it]
Their work was good. [adjective
used after the verb be, as its
complement]
Not adjectives:
The lamp glowed. [verb]
It was such a bright red! [noun]
He spoke loudly. [adverb]
It was a French grammar book.
[noun]
English
81
Term Guidance Example
because verbs, nouns and adverbs
can do the same thing.
adverb The surest way to identify adverbs is
by the ways they can be used: they
can modify a verb, an adjective,
another adverb or even a whole
clause.
Adverbs are sometimes said to
describe manner or time. This is
often true, but it doesn’t help to
distinguish adverbs from other word
classes that can be used as
adverbials, such as preposition
phrases, noun phrases and
subordinate clauses.
Usha soon started snoring loudly.
[adverbs modifying the verbs
started and snoring]
That match was really exciting!
[adverb modifying the adjective
exciting]
We don’t get to play games very
often. [adverb modifying the other
adverb, often]
Fortunately, it didn’t rain. [adverb
modifying the whole clause ‘it didn’t
rain’ by commenting on it]
Not adverbs:
 Usha went up the stairs.
[preposition phrase used as
adverbial]
 She finished her work this
evening. [noun phrase used as
adverbial]
 She finished when the teacher
got cross. [subordinate clause
used as adverbial]
adverbial An adverbial is a word or phrase that
is used, like an adverb, to modify a
verb or clause. Of course, adverbs
can be used as adverbials, but many
other types of words and phrases
can be used this way, including
preposition phrases and subordinate
clauses.
The bus leaves in five minutes.
[preposition phrase as adverbial:
modifies leaves]
She promised to see him last night.
[noun phrase modifying either
promised or see, according to the
intended meaning]
She worked until she had finished.
[subordinate clause as adverbial]
antonym Two words are antonyms if their
meanings are opposites.
hot – cold
light – dark
light – heavy
apostrophe Apostrophes have two completely
different uses:
 showing the place of missing
letters (e.g. I’m for I am)
I’m going out and I won’t be long.
[showing missing letters]
Hannah’s mother went to town in
Justin’s car. [marking possessives]
English
82
Term Guidance Example
 marking possessives
(e.g. Hannah’s mother).
article The articles the (definite) and a or an
(indefinite) are the most common
type of determiner.
The dog found a bone in an old
box.
auxiliary verb The auxiliary verbs are: be, have, do
and the modal verbs. They can be
used to make questions and
negative statements. In addition:
 be is used in the progressive and
passive
 have is used in the perfect
 do is used to form questions and
negative statements if no other
auxiliary verb is present
They are winning the match. [be
used in the progressive]
Have you finished your picture?
[have used to make a question,
and the perfect]
No, I don’t know him. [do used to
make a negative; no other auxiliary
is present]
Will you come with me or not?
[modal verb will used to make a
question about the other person’s
willingness]
clause A clause is a special type of phrase
whose head is a verb. Clauses can
sometimes be complete sentences.
Clauses may be main or
subordinate.
Traditionally, a clause had to have a
finite verb, but most modern
grammarians also recognise nonfinite clauses.
It was raining. [single-clause
sentence]
It was raining but we were indoors.
[two finite clauses]
If you are coming to the party,
please let us know. [finite
subordinate clause inside a finite
main clause]
Usha went upstairs to play on her
computer. [non-finite clause]
cohesion A text has cohesion if it is clear how
the meanings of its parts fit together.
Cohesive devices can help to do
this.
In the example, there are repeated
references to the same thing (shown
by the different style pairings), and
the logical relations, such as time
and cause, between different parts
are clear.
A visit has been arranged for Year
6, to the Mountain Peaks Field
Study Centre, leaving school at
9.30am. This is an overnight
visit. The centre has beautiful
grounds and a nature trail. During
the afternoon, the children will
follow the trail.
cohesive device Cohesive devices are words used to
show how the different parts of a text
fit together. In other words, they
create cohesion.
Julia’s dad bought her a football.
The football was expensive!
[determiner; refers us back to a
particular football]
English
83
Term Guidance Example
Some examples of cohesive devices
are:
 determiners and pronouns, which
can refer back to earlier words
 conjunctions and adverbs, which
can make relations between
words clear
 ellipsis of expected words.
Joe was given a bike for
Christmas. He liked it very much.
[the pronouns refer back to Joe
and the bike]
We’ll be going shopping before we
go to the park. [conjunction; makes
a relationship of time clear]
I’m afraid we’re going to have to
wait for the next train. Meanwhile,
we could have a cup of tea.
[adverb; refers back to the time of
waiting]
Where are you going? [ ] To
school! [ellipsis of the expected
words I’m going; links the answer
back to the question]
complement A verb’s subject complement adds
more information about its subject,
and its object complement does the
same for its object.
Unlike the verb’s object, its
complement may be an adjective.
The verb be normally has a
complement.
She is our teacher. [adds more
information about the subject, she]
They seem very competent. [adds
more information about the subject,
they]
Learning makes me happy. [adds
more information about the object,
me]
compound,
compounding
A compound word contains at least
two root words in its morphology;
e.g. whiteboard, superman.
Compounding is very important in
English.
blackbird, blow-dry, bookshop, icecream, English teacher, inkjet, oneeyed, bone-dry, baby-sit,
daydream, outgrow
conjunction A conjunction links two words or
phrases together.
There are two main types of
conjunctions:
 co-ordinating conjunctions (e.g.
and) link two words or phrases
together as an equal pair
 subordinating conjunctions (e.g.
when) introduce a subordinate
clause.
James bought a bat and ball. [links
the words bat and ball as an equal
pair]
Kylie is young but she can kick the
ball hard. [links two clauses as an
equal pair]
Everyone watches when Kyle does
back-flips. [introduces a
subordinate clause]
Joe can’t practise kicking because
he’s injured. [introduces a
subordinate clause]
English
84
Term Guidance Example
consonant A sound which is produced when the
speaker closes off or obstructs the
flow of air through the vocal tract,
usually using lips, tongue or teeth.
Most of the letters of the alphabet
represent consonants. Only the
letters a, e, i, o, u and y can
represent vowel sounds.
/p/ [flow of air stopped by the lips,
then released]
/t/ [flow of air stopped by the
tongue touching the roof of the
mouth, then released]
/f/ [flow of air obstructed by the
bottom lip touching the top teeth]
/s/ [flow of air obstructed by the tip
of the tongue touching the gum
line]
continuous See progressive
co-ordinate,
co-ordination
Words or phrases are co-ordinated if
they are linked as an equal pair by a
co-ordinating conjunction (i.e. and,
but, or).
In the examples on the right, the coordinated elements are shown in
bold, and the conjunction is
underlined.
The difference between
co-ordination and subordination is
that, in subordination, the two linked
elements are not equal.
Susan and Amra met in a café.
[links the words Susan and Amra
as an equal pair]
They talked and drank tea for an
hour. [links two clauses as an
equal pair]
Susan got a bus but Amra
walked. [links two clauses as an
equal pair]
Not co-ordination: They ate before
they met. [before introduces a
subordinate clause]
determiner A determiner specifies a noun as
known or unknown, and it goes
before any modifiers (e.g. adjectives
or other nouns).
Some examples of determiners are:
 articles (the, a or an)
 demonstratives (e.g. this, those)
 possessives (e.g. my, your)
 quantifiers (e.g. some, every).
the home team [article, specifies
the team as known]
a good team [article, specifies the
team as unknown]
that pupil [demonstrative, known]
Julia’s parents [possessive, known]
some big boys [quantifier,
unknown]
Contrast: home the team, big some
boys [both incorrect, because the
determiner should come before
other modifiers]
digraph A type of grapheme where two
letters represent one phoneme.
Sometimes, these two letters are not
next to one another; this is called a
The digraph ea in each is
pronounced /i:/.
The digraph sh in shed is
pronounced /ʃ/.
English
85
Term Guidance Example
split digraph. The split digraph i–e in line is
pronounced /aɪ/.
ellipsis Ellipsis is the omission of a word or
phrase which is expected and
predictable.
Frankie waved to Ivana and she
watched her drive away.
She did it because she wanted to
do it.
etymology A word’s etymology is its history: its
origins in earlier forms of English or
other languages, and how its form
and meaning have changed. Many
words in English have come from
Greek, Latin or French.
The word school was borrowed
from a Greek word ó÷ïëÞ (skholé)
meaning ‘leisure’.
The word verb comes from Latin
verbum, meaning ‘word’.
The word mutton comes from
French mouton, meaning ‘sheep’.
finite verb Every sentence typically has at least
one verb which is either past or
present tense. Such verbs are called
‘finite’. The imperative verb in a
command is also finite.
Verbs that are not finite, such as
participles or infinitives, cannot stand
on their own: they are linked to
another verb in the sentence.
Lizzie does the dishes every day.
[present tense]
Even Hana did the dishes
yesterday. [past tense]
Do the dishes, Naser! [imperative]
Not finite verbs:
 I have done them. [combined
with the finite verb have]
 I will do them. [combined with
the finite verb will]
 I want to do them! [combined
with the finite verb want]
fronting, fronted A word or phrase that normally
comes after the verb may be moved
before the verb: when this happens,
we say it has been ‘fronted’. For
example, a fronted adverbial is an
adverbial which has been moved
before the verb.
When writing fronted phrases, we
often follow them with a comma.
Before we begin, make sure you’ve
got a pencil.
[Without fronting: Make sure you’ve
got a pencil before we begin.]
The day after tomorrow, I’m visiting
my granddad.
[Without fronting: I’m visiting my
granddad the day after tomorrow.]
future Reference to future time can be
marked in a number of different ways
in English. All these ways involve the
use of a present-tense verb.
See also tense.
Unlike many other languages (such
He will leave tomorrow. [presenttense will followed by infinitive
leave]
He may leave tomorrow. [presenttense may followed by infinitive
leave]
English
86
Term Guidance Example
as French, Spanish or Italian),
English has no distinct ‘future tense’
form of the verb comparable with its
present and past tenses.
He leaves tomorrow. [presenttense leaves]
He is going to leave tomorrow.
[present tense is followed by going
to plus the infinitive leave]
GPC See grapheme-phoneme
correspondences.
grapheme A letter, or combination of letters,
that corresponds to a single
phoneme within a word.
The grapheme t in the words ten,
bet and ate corresponds to the
phoneme /t/.
The grapheme ph in the word
dolphin corresponds to the
phoneme /f/.
graphemephoneme
correspondences
The links between letters, or
combinations of letters (graphemes)
and the speech sounds (phonemes)
that they represent.
In the English writing system,
graphemes may correspond to
different phonemes in different
words.
The grapheme s corresponds to
the phoneme /s/ in the word see,
but…
…it corresponds to the phoneme
/z/ in the word easy.
head See phrase.
homonym Two different words are homonyms if
they both look exactly the same
when written, and sound exactly the
same when pronounced.
Has he left yet? Yes – he went
through the door on the left.
The noise a dog makes is called a
bark. Trees have bark.
homophone Two different words are
homophones if they sound exactly
the same when pronounced.
hear, here
some, sum
infinitive A verb’s infinitive is the basic form
used as the head-word in a
dictionary (e.g. walk, be).
Infinitives are often used:
 after to
 after modal verbs.
I want to walk.
I will be quiet.
inflection When we add -ed to walk, or change
mouse to mice, this change of
morphology produces an inflection
(‘bending’) of the basic word which
has special grammar (e.g. past tense
dogs is an inflection of dog.
went is an inflection of go.
better is an inflection of good.
English
87
Term Guidance Example
or plural). In contrast, adding -er to
walk produces a completely different
word, walker, which is part of the
same word family. Inflection is
sometimes thought of as merely a
change of ending, but, in fact, some
words change completely when
inflected.
intransitive verb A verb which does not need an
object in a sentence to complete its
meaning is described as intransitive.
See ‘transitive verb’.
We all laughed.
We would like to stay longer, but
we must leave.
main clause A sentence contains at least one
clause which is not a subordinate
clause; such a clause is a main
clause. A main clause may contain
any number of subordinate clauses.
It was raining but the sun was
shining. [two main clauses]
The man who wrote it told me that
it was true. [one main clause
containing two subordinate
clauses.]
She said, “It rained all day.” [one
main clause containing another.]
modal verb Modal verbs are used to change the
meaning of other verbs. They can
express meanings such as certainty,
ability, or obligation. The main modal
verbs are will, would, can, could,
may, might, shall, should, must and
ought.
A modal verb only has finite forms
and has no suffixes (e.g. I sing – he
sings, but not I must – he musts).
I can do this maths work by myself.
This ride may be too scary for you!
You should help your little brother.
Is it going to rain? Yes, it might.
Canning swim is important. [not
possible because can must be
finite; contrast: Being able to swim
is important, where being is not a
modal verb]
modify, modifier One word or phrase modifies
another by making its meaning more
specific.
Because the two words make a
phrase, the ‘modifier’ is normally
close to the modified word.
In the phrase primary-school
teacher:
 teacher is modified by primaryschool (to mean a specific kind
of teacher)
 school is modified by primary
(to mean a specific kind of
school).
morphology A word’s morphology is its internal
make-up in terms of root words and
suffixes or prefixes, as well as other
kinds of change such as the change
dogs has the morphological makeup: dog + s.
unhelpfulness has the
English
88
Term Guidance Example
of mouse to mice.
Morphology may be used to produce
different inflections of the same word
(e.g. boy – boys), or entirely new
words (e.g. boy – boyish) belonging
to the same word family.
A word that contains two or more
root words is a compound (e.g.
news+paper, ice+cream).
morphological make-up:
unhelpful + ness
 where unhelpful = un + helpful
 and helpful = help + ful
noun The surest way to identify nouns is
by the ways they can be used after
determiners such as the: for
example, most nouns will fit into the
frame “The __ matters/matter.”
Nouns are sometimes called ‘naming
words’ because they name people,
places and ‘things’; this is often true,
but it doesn’t help to distinguish
nouns from other word classes. For
example, prepositions can name
places and verbs can name ‘things’
such as actions.
Nouns may be classified as
common (e.g. boy, day) or proper
(e.g. Ivan, Wednesday), and also as
countable (e.g. thing, boy) or noncountable (e.g. stuff, money). These
classes can be recognised by the
determiners they combine with.
Our dog bit the burglar on his
behind!
My big brother did an amazing
jump on his skateboard.
Actions speak louder than words.
Not nouns:
 He’s behind you! [this names a
place, but is a preposition, not
a noun]
 She can jump so high! [this
names an action, but is a verb,
not a noun]
common, countable: a book,
books, two chocolates, one day,
fewer ideas
common, non-countable: money,
some chocolate, less imagination
proper, countable: Marilyn,
London, Wednesday
noun phrase A noun phrase is a phrase with a
noun as its head, e.g. some foxes,
foxes with bushy tails. Some
grammarians recognise one-word
phrases, so that foxes are
multiplying would contain the noun
foxes acting as the head of the noun
phrase foxes.
Adult foxes can jump. [adult
modifies foxes, so adult belongs to
the noun phrase]
Almost all healthy adult foxes in
this area can jump. [all the other
words help to modify foxes, so they
all belong to the noun phrase]
object An object is normally a noun,
pronoun or noun phrase that comes
straight after the verb, and shows
what the verb is acting upon.
Objects can be turned into the
Year 2 designed puppets. [noun
acting as object]
I like that. [pronoun acting as
object]
English
89
Term Guidance Example
subject of a passive verb, and
cannot be adjectives (contrast with
complements).
Some people suggested a pretty
display. [noun phrase acting as
object]
Contrast:
 A display was suggested.
[object of active verb becomes
the subject of the passive verb]
 Year 2 designed pretty.
[incorrect, because adjectives
cannot be objects]
participle Verbs in English have two
participles, called ‘present participle’
(e.g. walking, taking) and ‘past
participle’ (e.g. walked, taken).
Unfortunately, these terms can be
confusing to learners, because:
 they don’t necessarily have
anything to do with present or
past time
 although past participles are
used as perfects (e.g. has eaten)
they are also used as passives
(e.g. was eaten).
He is walking to school. [present
participle in a progressive]
He has taken the bus to school.
[past participle in a perfect]
The photo was taken in the rain.
[past participle in a passive]
passive The sentence It was eaten by our
dog is the passive of Our dog ate it.
A passive is recognisable from:
 the past participle form eaten
 the normal object (it) turned into
the subject
 the normal subject (our dog)
turned into an optional
preposition phrase with by as its
head
 the verb be(was), or some other
verb such as get.
Contrast active.
A verb is not ‘passive’ just because it
has a passive meaning: it must be
the passive version of an active verb.
A visit was arranged by the school.
Our cat got run over by a bus.
Active versions:
 The school arranged a visit.
 A bus ran over our cat.
Not passive:
 He received a warning. [past
tense, active received]
 We had an accident. [past
tense, active had]
past tense Verbs in the past tense are
commonly used to:
Tom and Chris showed me their
new TV. [names an event in the
English
90
Term Guidance Example
 talk about the past
 talk about imagined situations
 make a request sound more
polite.
Most verbs take a suffix –ed, to form
their past tense, but many
commonly-used verbs are irregular.
See also tense.
past]
Antonio went on holiday to Brazil.
[names an event in the past;
irregular past of go]
I wish I had a puppy. [names an
imagined situation, not a situation
in the past]
I was hoping you’d help tomorrow.
[makes an implied request sound
more polite]
perfect The perfect form of a verb generally
calls attention to the consequences
of a prior event; for example, he has
gone to lunch implies that he is still
away, in contrast with he went to
lunch. ‘Had gone to lunch’ takes a
past time point (i.e. when we arrived)
as its reference point and is another
way of establishing time relations in
a text. The perfect tense is formed
by:
 turning the verb into its past
participle inflection
 adding a form of the verb have
before it.
It can also be combined with the
progressive (e.g. he has been
going).
She has downloaded some songs.
[present perfect; now she has
some songs]
I had eaten lunch when you came.
[past perfect; I wasn’t hungry when
you came]
phoneme A phoneme is the smallest unit of
sound that signals a distinct,
contrasting meaning. For example:
 /t/ contrasts with /k/ to signal the
difference between tap and cap
 /t/ contrasts with /l/ to signal the
difference between bought and
ball.
It is this contrast in meaning that tells
us there are two distinct phonemes
at work.
There are around 44 phonemes in
English; the exact number depends
on regional accents. A single
The word cat has three letters and
three phonemes: /kæt/
The word catch has five letters and
three phonemes: /kaʧ/
The word caught has six letters
and three phonemes: /kɔ:t/
English
91
Term Guidance Example
phoneme may be represented in
writing by one, two, three or four
letters constituting a single
grapheme.
phrase A phrase is a group of words that are
grammatically connected so that
they stay together, and that expand
a single word, called the ‘head’. The
phrase is a noun phrase if its head is
a noun, a preposition phrase if its
head is a preposition, and so on; but
if the head is a verb, the phrase is
called a clause. Phrases can be
made up of other phrases.
She waved to her mother. [a noun
phrase, with the noun mother as its
head]
She waved to her mother. [a
preposition phrase, with the
preposition to as its head]
She waved to her mother. [a
clause, with the verb waved as its
head]
plural A plural noun normally has a suffix –
s or –es and means ‘more than one’.
There are a few nouns with different
morphology in the plural (e.g. mice,
formulae).
dogs [more than one dog]; boxes
[more than one box]
mice [more than one mouse]
possessive A possessive can be:
 a noun followed by an
apostrophe, with or without s
 a possessive pronoun.
The relation expressed by a
possessive goes well beyond
ordinary ideas of ‘possession’.
A possessive may act as a
determiner.
Tariq’s book [Tariq has the book]
The boys’ arrival [the boys arrive]
His obituary [the obituary is about
him]
That essay is mine. [I wrote the
essay]
prefix A prefix is added at the beginning of
a word in order to turn it into another
word.
Contrast suffix.
overtake, disappear
preposition A preposition links a following noun,
pronoun or noun phrase to some
other word in the sentence.
Prepositions often describe locations
or directions, but can describe other
things, such as relations of time.
Words like before or since can act
either as prepositions or as
conjunctions.
Tom waved goodbye to Christy.
She’ll be back from Australia in two
weeks.
I haven’t seen my dog since this
morning.
Contrast: I’m going, since no-one
wants me here! [conjunction: links
two clauses]
English
92
Term Guidance Example
preposition
phrase
A preposition phrase has a
preposition as its head followed by a
noun, pronoun or noun phrase.
He was in bed.
I met them after the party.
present tense Verbs in the present tense are
commonly used to:
 talk about the present
 talk about the future.
They may take a suffix –s
(depending on the subject).
See also tense.
Jamal goes to the pool every day.
[describes a habit that exists now]
He can swim. [describes a state
that is true now]
The bus arrives at three.
[scheduled now]
My friends are coming to play.
[describes a plan in progress now]
progressive The progressive (also known as the
‘continuous’) form of a verb generally
describes events in progress. It is
formed by combining the verb’s
present participle (e.g. singing) with
a form of the verb be (e.g. he was
singing). The progressive can also
be combined with the perfect (e.g. he
has been singing).
Michael is singing in the store
room. [present progressive]
Amanda was making a patchwork
quilt. [past progressive]
Usha had been practising for an
hour when I called. [past perfect
progressive]
pronoun Pronouns are normally used like
nouns, except that:
 they are grammatically more
specialised
 it is harder to modify them
In the examples, each sentence is
written twice: once with nouns, and
once with pronouns (underlined).
Where the same thing is being talked
about, the words are shown in bold.
Amanda waved to Michael.
She waved to him.
John’s mother is over there. His
mother is over there.
The visit will be an overnight visit.
This will be an overnight visit.
Simon is the person: Simon broke
it. He is the one who broke it.
punctuation Punctuation includes any
conventional features of writing other
than spelling and general layout: the
standard punctuation marks . , ; : ? !
- – ( ) “ ” ‘ ’ , and also word-spaces,
capital letters, apostrophes,
paragraph breaks and bullet points.
One important role of punctuation is
to indicate sentence boundaries.
“I’m going out, Usha, and I won’t
be long,” Mum said.
Received
Pronunciation
Received Pronunciation (often
abbreviated to RP) is an accent
which is used only by a small
English
93
Term Guidance Example
minority of English speakers in
England. It is not associated with any
one region. Because of its regional
neutrality, it is the accent which is
generally shown in dictionaries in the
UK (but not, of course, in the USA).
RP has no special status in the
national curriculum.
register Classroom lessons, football
commentaries and novels use
different registers of the same
language, recognised by differences
of vocabulary and grammar.
Registers are ‘varieties’ of a
language which are each tied to a
range of uses, in contrast with
dialects, which are tied to groups of
users.
I regret to inform you that Mr
Joseph Smith has passed away.
[formal letter]
Have you heard that Joe has died?
[casual speech]
Joe falls down and dies, centre
stage. [stage direction]
relative clause A relative clause is a special type of
subordinate clause that modifies a
noun. It often does this by using a
relative pronoun such as who or that
to refer back to that noun, though the
relative pronoun that is often omitted.
A relative clause may also be
attached to a clause. In that case,
the pronoun refers back to the whole
clause, rather than referring back to
a noun.
In the examples, the relative clauses
are underlined, and both the
pronouns and the words they refer
back to are in bold.
That’s the boy who lives near
school. [who refers back to boy]
The prize that I won was a book.
[that refers back to prize]
The prize I won was a book. [the
pronoun that is omitted]
Tom broke the game, which
annoyed Ali. [which refers back to
the whole clause]
root word Morphology breaks words down into
root words, which can stand alone,
and suffixes or prefixes which can’t.
For example, help is the root word
for other words in its word family
such as helpful and helpless, and
also for its inflections such as
helping. Compound words (e.g. helpdesk) contain two or more root
words. When looking in a dictionary,
we sometimes have to look for the
played [the root word is play]
unfair [the root word is fair]
football [the root words are foot
and ball]
English
94
Term Guidance Example
root word (or words) of the word we
are interested in.
schwa The name of a vowel sound that is
found only in unstressed positions in
English. It is the most common vowel
sound in English.
It is written as /ə/ in the International
Phonetic Alphabet. In the English
writing system, it can be written in
many different ways.
/əlɒŋ/ [along]
/bʌtə/ [butter]
/dɒktə/ [doctor]
sentence A sentence is a group of words
which are grammatically connected
to each other but not to any words
outside the sentence.
The form of a sentence’s main
clause shows whether it is being
used as a statement, a question, a
command or an exclamation.
A sentence may consist of a single
clause or it may contain several
clauses held together by
subordination or co-ordination.
Classifying sentences as ‘simple’,
‘complex’ or ‘compound’ can be
confusing, because a ‘simple’
sentence may be complicated, and a
‘complex’ one may be
straightforward. The terms ‘singleclause sentence’ and ‘multi-clause
sentence’ may be more helpful.
John went to his friend’s house. He
stayed there till tea-time.
John went to his friend’s house, he
stayed there till tea-time. [This is a
‘comma splice’, a common error in
which a comma is used where
either a full stop or a semi-colon is
needed to indicate the lack of any
grammatical connection between
the two clauses.]
You are my friend. [statement]
Are you my friend? [question]
Be my friend! [command]
What a good friend you are!
[exclamation]
Ali went home on his bike to his
goldfish and his current library
book about pets. [single-clause
sentence]
She went shopping but took back
everything she had bought
because she didn’t like any of it.
[multi-clause sentence]
split digraph See digraph.
Standard English Standard English can be recognised
by the use of a very small range of
forms such as those books, I did it
and I wasn’t doing anything (rather
than their non-Standard equivalents);
it is not limited to any particular
accent. It is the variety of English
which is used, with only minor
I did it because they were not
willing to undertake any more work
on those houses. [formal Standard
English]
I did it cos they wouldn’t do any
more work on those houses.
[casual Standard English]
English
95
Term Guidance Example
variation, as a major world language.
Some people use Standard English
all the time, in all situations from the
most casual to the most formal, so it
covers most registers. The aim of the
national curriculum is that everyone
should be able to use Standard
English as needed in writing and in
relatively formal speaking.
I done it cos they wouldn’t do no
more work on them houses.
[casual non-Standard English]
stress A syllable is stressed if it is
pronounced more forcefully than the
syllables next to it. The other
syllables are unstressed.
about
visit
subject The subject of a verb is normally the
noun, noun phrase or pronoun that
names the ‘do-er’ or ‘be-er’. The
subject’s normal position is:
 just before the verb in a
statement
 just after the auxiliary verb, in a
question.
Unlike the verb’s object and
complement, the subject can
determine the form of the verb (e.g. I
am, you are).
Rula’s mother went out.
That is uncertain.
The children will study the animals.
Will the children study the animals?
subjunctive In some languages, the inflections of
a verb include a large range of
special forms which are used
typically in subordinate clauses, and
are called ‘subjunctives’. English has
very few such forms and those it has
tend to be used in rather formal
styles.
The school requires that all pupils
be honest.
The school rules demand that
pupils not enter the gym at
lunchtime.
If Zoë were the class president,
things would be much better.
subordinate,
subordination
A subordinate word or phrase tells
us more about the meaning of the
word it is subordinate to.
Subordination can be thought of as
an unequal relationship between a
subordinate word and a main word.
For example:
 an adjective is subordinate to the
noun it modifies
 subjects and objects are
big dogs [big is subordinate to
dogs]
Big dogs need long walks.
[big dogs and long walks are
subordinate to need]
We can watch TV when we’ve
finished. [when we’ve finished is
subordinate to watch]
English
96
Term Guidance Example
subordinate to their verbs.
Subordination is much more
common than the equal relationship
of co-ordination.
See also subordinate clause.
subordinate
clause
A clause which is subordinate to
some other part of the same
sentence is a subordinate clause; for
example, in The apple that I ate was
sour, the clause that I ate is
subordinate to apple (which it
modifies). Subordinate clauses
contrast with co-ordinate clauses as
in It was sour but looked very tasty.
(Contrast: main clause)
However, clauses that are directly
quoted as direct speech are not
subordinate clauses.
That’s the street where Ben lives.
[relative clause; modifies street]
He watched her as she
disappeared. [adverbial; modifies
watched]
What you said was very nice. [acts
as subject of was]
She noticed an hour had passed.
[acts as object of noticed]
Not subordinate: He shouted,
“Look out!”
suffix A suffix is an ‘ending’, used at the
end of one word to turn it into
another word. Unlike root words,
suffixes cannot stand on their own as
a complete word.
Contrast prefix.
call – called
teach – teacher [turns a verb into a
noun]
terror – terrorise [turns a noun into
a verb]
green – greenish [leaves word
class unchanged]
syllable A syllable sounds like a beat in a
word. Syllables consist of at least
one vowel, and possibly one or more
consonants.
Cat has one syllable.
Fairy has two syllables.
Hippopotamus has five syllables.
synonym Two words are synonyms if they
have the same meaning, or similar
meanings. Contrast antonym.
talk – speak
old – elderly
tense In English, tense is the choice
between present and past verbs,
which is special because it is
signalled by inflections and normally
indicates differences of time. In
contrast, languages like French,
Spanish and Italian, have three or
more distinct tense forms, including
He studies. [present tense –
present time]
He studied yesterday. [past tense –
past time]
He studies tomorrow, or else!
[present tense – future time]
He may study tomorrow. [present
English
97
Term Guidance Example
a future tense. (See also: future.)
The simple tenses (present and
past) may be combined in English
with the perfect and progressive.
tense + infinitive – future time]
He plans to study tomorrow.
[present tense + infinitive – future
time]
If he studied tomorrow, he’d see
the difference! [past tense –
imagined future]
Contrast three distinct tense forms
in Spanish:
 Estudia. [present tense]
 Estudió. [past tense]
 Estudiará. [future tense]
transitive verb A transitive verb takes at least one
object in a sentence to complete its
meaning, in contrast to an
intransitive verb, which does not.
He loves Juliet.
She understands English grammar.
trigraph A type of grapheme where three
letters represent one phoneme.
High, pure, patch, hedge
unstressed See stressed.
verb The surest way to identify verbs is by
the ways they can be used: they can
usually have a tense, either present
or past (see also future).
Verbs are sometimes called ‘doing
words’ because many verbs name
an action that someone does; while
this can be a way of recognising
verbs, it doesn’t distinguish verbs
from nouns (which can also name
actions). Moreover many verbs
name states or feelings rather than
actions.
Verbs can be classified in various
ways: for example, as auxiliary, or
modal; as transitive or intransitive;
and as states or events.
He lives in Birmingham. [present
tense]
The teacher wrote a song for the
class. [past tense]
He likes chocolate. [present tense;
not an action]
He knew my father. [past tense;
not an action]
Not verbs:
 The walk to Halina’s house will
take an hour. [noun]
 All that surfing makes
Morwenna so sleepy! [noun]
vowel A vowel is a speech sound which is
produced without any closure or
obstruction of the vocal tract.
Vowels can form syllables by
themselves, or they may combine
with consonants.
In the English writing system, the
letters a, e, i, o, u and y can
represent vowels.
English
98
Term Guidance Example
word A word is a unit of grammar: it can
be selected and moved around
relatively independently, but cannot
easily be split. In punctuation, words
are normally separated by word
spaces.
Sometimes, a sequence that
appears grammatically to be two
words is collapsed into a single
written word, indicated with a hyphen
or apostrophe (e.g. well-built, he’s).
headteacher or head teacher [can
be written with or without a space]
I’m going out.
9.30 am
word class Every word belongs to a word class
which summarises the ways in which
it can be used in grammar. The
major word classes for English are:
noun, verb, adjective, adverb,
preposition, determiner, pronoun,
conjunction. Word classes are
sometimes called ‘parts of speech’.
word family The words in a word family are
normally related to each other by a
combination of morphology,
grammar and meaning.
teach – teacher
extend – extent – extensive
grammar – grammatical –
grammarian

Year 6 programme of study
Number – number and place value
Statutory requirements
Pupils should be taught to:
 read, write, order and compare numbers up to 10 000 000 and determine the value
of each digit
 round any whole number to a required degree of accuracy
 use negative numbers in context, and calculate intervals across zero
 solve number and practical problems that involve all of the above.
Notes and guidance (non-statutory)
Pupils use the whole number system, including saying, reading and writing numbers
accurately.
Number – addition, subtraction, multiplication and division
Statutory requirements
Pupils should be taught to:
 multiply multi-digit numbers up to 4 digits by a two-digit whole number using the
formal written method of long multiplication
 divide numbers up to 4 digits by a two-digit whole number using the formal written
method of long division, and interpret remainders as whole number remainders,
fractions, or by rounding, as appropriate for the context
 divide numbers up to 4 digits by a two-digit number using the formal written method
of short division where appropriate, interpreting remainders according to the context
 perform mental calculations, including with mixed operations and large numbers
 identify common factors, common multiples and prime numbers
 use their knowledge of the order of operations to carry out calculations involving the
four operations
 solve addition and subtraction multi-step problems in contexts, deciding which
operations and methods to use and why
Mathematics
136
Statutory requirements
 solve problems involving addition, subtraction, multiplication and division
 use estimation to check answers to calculations and determine, in the context of a
problem, an appropriate degree of accuracy.
Notes and guidance (non-statutory)
Pupils practise addition, subtraction, multiplication and division for larger numbers,
using the formal written methods of columnar addition and subtraction, short and long
multiplication, and short and long division (see Mathematics Appendix 1).
They undertake mental calculations with increasingly large numbers and more complex
calculations.
Pupils continue to use all the multiplication tables to calculate mathematical statements
in order to maintain their fluency.
Pupils round answers to a specified degree of accuracy, for example, to the nearest 10,
20, 50 etc., but not to a specified number of significant figures.
Pupils explore the order of operations using brackets; for example, 2 + 1 x 3 = 5 and
(2 + 1) x 3 = 9.
Common factors can be related to finding equivalent fractions.
Number – fractions (including decimals and percentages)
Statutory requirements
Pupils should be taught to:
 use common factors to simplify fractions; use common multiples to express fractions
in the same denomination
 compare and order fractions, including fractions > 1
 add and subtract fractions with different denominators and mixed numbers, using the
concept of equivalent fractions
 multiply simple pairs of proper fractions, writing the answer in its simplest form
[for example, 4
1 × 2
1 = 8
1 ]
 divide proper fractions by whole numbers [for example, 3
1 ÷ 2 = 6
1 ]
 associate a fraction with division and calculate decimal fraction equivalents [for
example, 0.375] for a simple fraction [for example, 8
3 ]
 identify the value of each digit in numbers given to three decimal places and multiply
and divide numbers by 10, 100 and 1000 giving answers up to three decimal places
Mathematics
137
Statutory requirements
 multiply one-digit numbers with up to two decimal places by whole numbers
 use written division methods in cases where the answer has up to two decimal
places
 solve problems which require answers to be rounded to specified degrees of
accuracy
 recall and use equivalences between simple fractions, decimals and percentages,
including in different contexts.
Notes and guidance (non-statutory)
Pupils should practise, use and understand the addition and subtraction of fractions with
different denominators by identifying equivalent fractions with the same denominator. They
should start with fractions where the denominator of one fraction is a multiple of the other
(for example, 2
1 + 8
1 = 8
5 ) and progress to varied and increasingly complex problems.
Pupils should use a variety of images to support their understanding of multiplication
with fractions. This follows earlier work about fractions as operators (fractions of), as
numbers, and as equal parts of objects, for example as parts of a rectangle.
Pupils use their understanding of the relationship between unit fractions and division to
work backwards by multiplying a quantity that represents a unit fraction to find the whole
quantity (for example, if 4
1 of a length is 36cm, then the whole length is 36 × 4 = 144cm).
They practise calculations with simple fractions and decimal fraction equivalents to aid
fluency, including listing equivalent fractions to identify fractions with common
denominators.
Pupils can explore and make conjectures about converting a simple fraction to a decimal
fraction (for example, 3 ÷ 8 = 0.375). For simple fractions with recurring decimal
equivalents, pupils learn about rounding the decimal to three decimal places, or other
appropriate approximations depending on the context. Pupils multiply and divide
numbers with up to two decimal places by one-digit and two-digit whole numbers. Pupils
multiply decimals by whole numbers, starting with the simplest cases, such as 0.4 × 2 =
0.8, and in practical contexts, such as measures and money.
Pupils are introduced to the division of decimal numbers by one-digit whole number,
initially, in practical contexts involving measures and money. They recognise division
calculations as the inverse of multiplication.
Pupils also develop their skills of rounding and estimating as a means of predicting and
checking the order of magnitude of their answers to decimal calculations. This includes
rounding answers to a specified degree of accuracy and checking the reasonableness of
their answers.
Mathematics
138
Ratio and proportion
Statutory requirements
Pupils should be taught to:
 solve problems involving the relative sizes of two quantities where missing values
can be found by using integer multiplication and division facts
 solve problems involving the calculation of percentages [for example, of measures,
and such as 15% of 360] and the use of percentages for comparison
 solve problems involving similar shapes where the scale factor is known or can be
found
 solve problems involving unequal sharing and grouping using knowledge of fractions
and multiples.
Notes and guidance (non-statutory)
Pupils recognise proportionality in contexts when the relations between quantities are in
the same ratio (for example, similar shapes and recipes).
Pupils link percentages or 360° to calculating angles of pie charts.
Pupils should consolidate their understanding of ratio when comparing quantities, sizes
and scale drawings by solving a variety of problems. They might use the notation a:b to
record their work.
Pupils solve problems involving unequal quantities, for example, ‘for every egg you need
three spoonfuls of flour’, ‘ 5
3 of the class are boys’. These problems are the foundation for
later formal approaches to ratio and proportion.
Algebra
Statutory requirements
Pupils should be taught to:
 use simple formulae
 generate and describe linear number sequences
 express missing number problems algebraically
 find pairs of numbers that satisfy an equation with two unknowns
 enumerate possibilities of combinations of two variables.
Mathematics
139
Notes and guidance (non-statutory)
Pupils should be introduced to the use of symbols and letters to represent variables and
unknowns in mathematical situations that they already understand, such as:
 missing numbers, lengths, coordinates and angles
 formulae in mathematics and science
 equivalent expressions (for example, a + b = b + a)
 generalisations of number patterns
 number puzzles (for example, what two numbers can add up to).
Measurement
Statutory requirements
Pupils should be taught to:
 solve problems involving the calculation and conversion of units of measure, using
decimal notation up to three decimal places where appropriate
 use, read, write and convert between standard units, converting measurements of
length, mass, volume and time from a smaller unit of measure to a larger unit, and
vice versa, using decimal notation to up to three decimal places
 convert between miles and kilometres
 recognise that shapes with the same areas can have different perimeters and vice
versa
 recognise when it is possible to use formulae for area and volume of shapes
 calculate the area of parallelograms and triangles
 calculate, estimate and compare volume of cubes and cuboids using standard units,
including cubic centimetres (cm3
) and cubic metres (m3
), and extending to other units
[for example, mm3 and km3
].
Notes and guidance (non-statutory)
Pupils connect conversion (for example, from kilometres to miles) to a graphical
representation as preparation for understanding linear/proportional graphs.
They know approximate conversions and are able to tell if an answer is sensible.
Using the number line, pupils use, add and subtract positive and negative integers for
measures such as temperature.
Mathematics
140
Notes and guidance (non-statutory)
They relate the area of rectangles to parallelograms and triangles, for example, by
dissection, and calculate their areas, understanding and using the formulae (in words or
symbols) to do this.
Pupils could be introduced to compound units for speed, such as miles per hour, and
apply their knowledge in science or other subjects as appropriate.
Geometry – properties of shapes
Statutory requirements
Pupils should be taught to:
 draw 2-D shapes using given dimensions and angles
 recognise, describe and build simple 3-D shapes, including making nets
 compare and classify geometric shapes based on their properties and sizes and find
unknown angles in any triangles, quadrilaterals, and regular polygons
 illustrate and name parts of circles, including radius, diameter and circumference and
know that the diameter is twice the radius
 recognise angles where they meet at a point, are on a straight line, or are vertically
opposite, and find missing angles.
Notes and guidance (non-statutory)
Pupils draw shapes and nets accurately, using measuring tools and conventional
markings and labels for lines and angles.
Pupils describe the properties of shapes and explain how unknown angles and lengths
can be derived from known measurements.
These relationships might be expressed algebraically for example, d = 2 × r;
a = 180 – (b + c).
Mathematics
141
Geometry – position and direction
Statutory requirements
Pupils should be taught to:
 describe positions on the full coordinate grid (all four quadrants)
 draw and translate simple shapes on the coordinate plane, and reflect them in the
axes.
Notes and guidance (non-statutory)
Pupils draw and label a pair of axes in all four quadrants with equal scaling. This
extends their knowledge of one quadrant to all four quadrants, including the use of
negative numbers.
Pupils draw and label rectangles (including squares), parallelograms and rhombuses,
specified by coordinates in the four quadrants, predicting missing coordinates using the
properties of shapes. These might be expressed algebraically for example, translating
vertex (a, b) to (a – 2, b + 3); (a, b) and (a + d, b + d) being opposite vertices of a square
of side d.
Statistics
Statutory requirements
Pupils should be taught to:
 interpret and construct pie charts and line graphs and use these to solve problems
 calculate and interpret the mean as an average.
Notes and guidance (non-statutory)
Pupils connect their work on angles, fractions and percentages to the interpretation of
pie charts.
Pupils both encounter and draw graphs relating two variables, arising from their own
enquiry and in other subjects.
They should connect conversion from kilometres to miles in measurement to its
graphical representation.
Pupils know when it is appropriate to find the mean of a data set.

NO MATTER WHAT HAPPENS, USE SHORT ANSWERS! NO MATTER WHAT HAPPENS, USE SHORT ANSWERS! NO MATTER WHAT HAPPENS, USE SHORT ANSWERS! NO MATTER WHAT HAPPENS, USE SHORT ANSWERS! NO MATTER WHAT HAPPENS, USE SHORT ANSWERS! NO MATTER WHAT HAPPENS, USE SHORT ANSWERS! NO MATTER WHAT HAPPENS, USE SHORT ANSWERS! NO MATTER WHAT HAPPENS, USE SHORT ANSWERS! NO MATTER WHAT HAPPENS, USE SHORT ANSWERS! NO MATTER WHAT HAPPENS, USE SHORT ANSWERS! NO MATTER WHAT HAPPENS, USE SHORT ANSWERS! NO MATTER WHAT HAPPENS, USE SHORT ANSWERS! NO MATTER WHAT HAPPENS, USE SHORT ANSWERS! NO MATTER WHAT HAPPENS, USE SHORT ANSWERS! NO MATTER WHAT HAPPENS, USE SHORT ANSWERS! NO MATTER WHAT HAPPENS, USE SHORT ANSWERS! NO MATTER WHAT HAPPENS, USE SHORT ANSWERS! NO MATTER WHAT HAPPENS, USE SHORT ANSWERS! 

`},
          { role: 'user', content: `${userInput}` }
        ],
        temperature: 0.7
      });

      // Set the chat response state to display it in the UI
      setResponse(chatResponse.choices[0].message.content);
    } catch (error) {
      console.error("Error fetching chat response:", error);
      setResponse("Sorry, something went wrong.");
    }
  };

  return (
    <div className="container">
      <div className="logo-row">
        <img className="logoimage" src="/header.png" alt="header" />
      </div>

      <div className="response-box">
        <span>{response}</span> {"WELCOME TO SPACE COMPANION"}
      </div>

      <form className="input-row" onSubmit={handleSubmit}>
        <input 
          value={userInput}
          name="query"
          onChange={handleChange}
          placeholder="Ask a question..." 
          className="user-input"
        />
        <button className="button" type="submit">
          <img src="/arrow.png" alt="Send" />
        </button>
        
      </form>
    </div>
  );
}

export default App;
