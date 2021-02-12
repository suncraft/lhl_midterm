INSERT INTO users (name, email, password) VALUES ('user1', 'user1@email.com', 'password');
INSERT INTO users (name, email, password) VALUES ('user2', 'user2@email.com', 'password');
INSERT INTO users (name, email, password) VALUES ('user3', 'user3@email.com', 'password');
INSERT INTO stories (cretor_id, story_title, story_beginning, is_complete, cover_photo_url) VALUES (1, 'This is the title of my first story', 'This is the beginning of my first story.', false, '#');
INSERT INTO stories (cretor_id, story_title, story_beginning, is_complete, cover_photo_url) VALUES (1, 'This is the title of my second story', 'This is the beginning of my second story.', true, '#');
INSERT INTO stories (cretor_id, story_title, story_beginning, is_complete, cover_photo_url) VALUES (2, 'This is the title of the other story', 'This is the beginning of another story.', false, '#');
INSERT INTO stories (cretor_id, story_title, story_beginning, is_complete, cover_photo_url) VALUES (2, 'THE COUNT OF MONTE CRISTO', 'On the 24th of February, 1815, the look-out at Notre-Dame de la Garde signalled the three-master, the Pharaon from Smyrna, Trieste, and Naples.', false, 'https://www.gutenberg.org/files/1184/1184-h/images/0011m.jpg');
INSERT INTO stories (cretor_id, story_title, story_beginning, is_complete, cover_photo_url) VALUES (2, 'Frankenstein; or, the Modern Prometheus', 'Letter 1
To Mrs. Saville, England.

St. Petersburgh, Dec. 11th, 17—.

You will rejoice to hear that no disaster has accompanied the commencement of an enterprise which you have regarded with such evil forebodings. I arrived here yesterday, and my first task is to assure my dear sister of my welfare and increasing confidence in the success of my undertaking. ', false, 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Frankenstein%2C_pg_7.jpg');
INSERT INTO stories (cretor_id, story_title, story_beginning, is_complete, cover_photo_url) VALUES (2, 'The Cremation Of Sam Mcgee',
    '
    By Robert William Service
    There are strange things done in the midnight sun
    By the men who moil for gold;
    The Arctic trails have their secret tales
    That would make your blood run cold;
    The Northern Lights have seen queer sights,
    But the queerest they ever did see
    Was that night on the marge of Lake Lebarge
    I cremated Sam McGee.', false, 'https://opentextbc.ca/provincialenglish/wp-content/uploads/sites/297/2019/05/rservice.jpg');

INSERT INTO contributions (story_id, contribution, user_id, is_accepted) VALUES (1, 'This is the first contribution.', 1, true);
INSERT INTO contributions (story_id, contribution, user_id, is_accepted) VALUES (2, 'This is the second storys first contribution.', 1, true);
INSERT INTO contributions (story_id, contribution, user_id, is_accepted) VALUES (2, 'This is the second storys second contribution.', 1, true);
INSERT INTO contributions (story_id, contribution, user_id, is_accepted) VALUES (4, 'As usual, a pilot put off immediately, and rounding the Château d’If, got on board the vessel between Cape Morgiou and Rion island.', 1, true);
INSERT INTO contributions (story_id, contribution, user_id, is_accepted) VALUES (4, 'Immediately, and according to custom, the ramparts of Fort Saint-Jean were covered with spectators; it is always an event at Marseilles for a ship to come into port, especially when this ship, like the Pharaon, has been built, rigged, and laden at the old Phocee docks, and belongs to an owner of the city.', 1, false);
INSERT INTO contributions (story_id, contribution, user_id, is_accepted) VALUES (4, 'The ship drew on and had safely passed the strait, which some volcanic shock has made between the Calasareigne and Jaros islands; had doubled Pomègue, and approached the harbor under topsails, jib, and spanker, but so slowly and sedately that the idlers, with that instinct which is the forerunner of evil, asked one another what misfortune could have happened on board. However, those experienced in navigation saw plainly that if any accident had occurred, it was not to the vessel herself, for she bore down with all the evidence of being skilfully handled, the anchor a-cockbill, the jib-boom guys already eased off, and standing by the side of the pilot, who was steering the Pharaon towards the narrow entrance of the inner port, was a young man, who, with activity and vigilant eye, watched every motion of the ship, and repeated each direction of the pilot.', 1, false);
INSERT INTO contributions (story_id, contribution, user_id, is_accepted) VALUES (5, 'I am already far north of London, and as I walk in the streets of Petersburgh, I feel a cold northern breeze play upon my cheeks, which braces my nerves and fills me with delight. Do you understand this feeling? This breeze, which has travelled from the regions towards which I am advancing, gives me a foretaste of those icy climes. Inspirited by this wind of promise, my daydreams become more fervent and vivid. I try in vain to be persuaded that the pole is the seat of frost and desolation; it ever presents itself to my imagination as the region of beauty and delight. There, Margaret, the sun is for ever visible, its broad disk just skirting the horizon and diffusing a perpetual splendour. There—for with your leave, my sister, I will put some trust in preceding navigators—there snow and frost are banished; and, sailing over a calm sea, we may be wafted to a land surpassing in wonders and in beauty every region hitherto discovered on the habitable globe. Its productions and features may be without example, as the phenomena of the heavenly bodies undoubtedly are in those undiscovered solitudes. What may not be expected in a country of eternal light? I may there discover the wondrous power which attracts the needle and may regulate a thousand celestial observations that require only this voyage to render their seeming eccentricities consistent for ever. I shall satiate my ardent curiosity with the sight of a part of the world never before visited, and may tread a land never before imprinted by the foot of man. These are my enticements, and they are sufficient to conquer all fear of danger or death and to induce me to commence this laborious voyage with the joy a child feels when he embarks in a little boat, with his holiday mates, on an expedition of discovery up his native river. But supposing all these conjectures to be false, you cannot contest the inestimable benefit which I shall confer on all mankind, to the last generation, by discovering a passage near the pole to those countries, to reach which at present so many months are requisite; or by ascertaining the secret of the magnet, which, if at all possible, can only be effected by an undertaking such as mine.', 1, true);
INSERT INTO contributions (story_id, contribution, user_id, is_accepted) VALUES (5, 'These reflections have dispelled the agitation with which I began my letter, and I feel my heart glow with an enthusiasm which elevates me to heaven, for nothing contributes so much to tranquillise the mind as a steady purpose—a point on which the soul may fix its intellectual eye. This expedition has been the favourite dream of my early years. I have read with ardour the accounts of the various voyages which have been made in the prospect of arriving at the North Pacific Ocean through the seas which surround the pole. You may remember that a history of all the voyages made for purposes of discovery composed the whole of our good Uncle Thomas’ library. My education was neglected, yet I was passionately fond of reading. These volumes were my study day and night, and my familiarity with them increased that regret which I had felt, as a child, on learning that my father’s dying injunction had forbidden my uncle to allow me to embark in a seafaring life.', 1, false);


INSERT INTO contributions (story_id, contribution, user_id, is_accepted) VALUES (6,
'
Now Sam McGee was from Tennessee, where the cotton blooms and blows.
    Why he left his home in the South to roam round the Pole God only knows.
    He was always cold, but the land of gold seemed to hold him like a spell;
    Though hed often say in his homely way that hed sooner live in hell.
', 2, true);

INSERT INTO contributions (story_id, contribution, user_id, is_accepted) VALUES (6,
'
On a Christmas Day we were mushing our way over the Dawson trail.
    Talk of your cold! through the parkas fold it stabbed like a driven nail.
    If our eyes wed close, then the lashes froze, till sometimes we couldnt see;
    It wasnt much fun, but the only one to whimper was Sam McGee.
', 2, true);

INSERT INTO contributions (story_id, contribution, user_id, is_accepted) VALUES (6, '
And that very night as we lay packed tight in our robes beneath the snow,
    And the dogs were fed, and the stars oerhead were dancing heel and toe,
    He turned to me, and, Cap, says he, Ill cash in this trip, I guess;
    And if I do, Im asking that you wont refuse my last request.
', 2, true);

INSERT INTO contributions (story_id, contribution, user_id, is_accepted) VALUES (6, '
Well, he seemed so low that I couldnt say no: then he says with a sort of moan:
    Its the curs�d cold, and its got right hold till Im chilled clean through to the bone.
    Yet taint being dead, its my awful dread of the icy grave that pains:
    So I want you to swear that, foul or fair, youll cremate my last remains.
', 2, true);

INSERT INTO contributions (story_id, contribution, user_id, is_accepted) VALUES (6, '
    A pals last need is a thing to heed, so I swore I would not fail;
    And we started on at the streak of dawn, but God! he looked ghastly pale.
    He crouched on the sleigh, and he raved all day of his home in Tennessee;
    And before nightfall a corpse was all that was left of Sam McGee.
', 2, true);

INSERT INTO contributions (story_id, contribution, user_id, is_accepted) VALUES (6, '
    There wasnt a breath in that land of death, and I hurried, horror driven,
    With a corpse half-hid that I couldnt get rid because of a promise given;
    It was lashed to the sleigh, and it seemed to say: You may tax your brawn and brains,
    But you promised true, and its up to you to cremate those last remains.
', 2, true);

INSERT INTO contributions (story_id, contribution, user_id, is_accepted) VALUES (6, '
    Now a promise made is a debt unpaid, and the trail has its own stern code.
    In the days to come, though my lips were dumb, in my heart how I cursed that load.
    In the long, long night, by the lone firelight, while the huskies, round in a ring,
    Howled out their woes to the homeless snows - O God! how I loathed the thing!
'
, 2, true);

INSERT INTO contributions (story_id, contribution, user_id, is_accepted) VALUES (6, '
    And every day that quiet clay seemed to heavy and heavier grow;
    And on I went, though the dogs were spent and the grub was getting low;
    The trail was bad, and I felt half mad, but I swore I would not give in;
    And Id often sing to the hateful thing, and it hearkened with a grin.
', 2, true);

INSERT INTO contributions (story_id, contribution, user_id, is_accepted) VALUES (6, '
    Till I came to the marge of Lake Lebarge, and a derelict there lay;
    It was jammed in the ice, but I saw in a trice it was called the Alice May.
    And I looked at it, and I thought a bit, and I looked at my frozen chum:
    Then, Here, said I, with a sudden cry, is my cre-ma-tor-eum.
', 2, true);

INSERT INTO contributions (story_id, contribution, user_id, is_accepted) VALUES (6, '
    Some planks I tore from the cabin floor, and I lit the boiler fire;
    Some coal I found that was lying around, and I heaped the fuel higher;
    The flames just soared, and the furnace roared - such a blaze you seldom see;
    And I burrowed a hole in the glowing coal, and I stuffed in Sam McGee.
', 2, true);

INSERT INTO contributions (story_id, contribution, user_id, is_accepted) VALUES (6, '
    Then I made a hike, for I didnt like to hear him sizzle so;
    And the heavens scowled, and the huskies howled, and the wind began to blow.
    It was icy cold, but the hot sweat rolled down my cheeks, and I dont know why;
    And the greasy smoke in an inky cloak went streaking down the sky.
', 2, true);

INSERT INTO contributions (story_id, contribution, user_id, is_accepted) VALUES (6, '
    I do not know how long in the snow I wrestled with grisly fear;
    But the stars came out and they danced about ere again I ventured near;
    I was sick with dread, but I bravely said: Ill just take a peep inside.
    I guess hes cooked, and its time I looked, ... then the door I opened wide.
', 2, true);

INSERT INTO contributions (story_id, contribution, user_id, is_accepted) VALUES (6, '
    And there sat Sam, looking cool and calm, in the heart of the furnace roar;
    And he wore a smile you could see a mile, and he said: Please close that door.
    Its fine in here, but I greatly fear youll let in the cold and storm -
    Since I left Plumtree, down in Tennessee, its the first time Ive been warm.
', 2, true);

INSERT INTO contributions (story_id, contribution, user_id, is_accepted) VALUES (6, '
    There are strange things done in the midnight sun
    By the men who moil for gold;
    The Arctic trails have their secret tales
    That would make your blood run cold;
    The Northern Lights have seen queer sights,
    But the queerest they ever did see
    Was that night on the marge of Lake Lebarge
    I cremated Sam McGee.
', 2, true);


INSERT INTO upvote_stories (story_id, user_id) VALUES (1, 1);
INSERT INTO upvote_stories (story_id, user_id) VALUES (1, 2);
INSERT INTO upvote_stories (story_id, user_id) VALUES (2, 2);
INSERT INTO upvote_contribution (user_id, contribution_id) VALUES (1, 2);
INSERT INTO upvote_contribution (user_id, contribution_id) VALUES (1, 3);
INSERT INTO upvote_contribution (user_id, contribution_id) VALUES (2, 3);
