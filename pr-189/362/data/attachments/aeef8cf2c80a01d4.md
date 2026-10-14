# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/tc-28-event-filter-by-time.spec.ts >> TC-28 Verify that a user can filter events by event time >> should filter upcoming and past events and restore all events
- Location: tests/ui/tc-28-event-filter-by-time.spec.ts:6:3

# Error details

```
Error: Test timeout of 30000ms exceeded
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - link "skip to the main content" [ref=e6] [cursor=pointer]:
        - /url: .main-content
      - banner "Welcome to header" [ref=e7]:
        - generic [ref=e9]:
          - link [ref=e10] [cursor=pointer]:
            - /url: "#/greenCity"
            - link "Image green city logo" [ref=e11]
          - generic [ref=e12]:
            - navigation [ref=e13]:
              - tablist [ref=e14]:
                - listitem [ref=e15]:
                  - link "Eco news" [ref=e16] [cursor=pointer]:
                    - /url: "#/greenCity/news"
                - listitem [ref=e17]:
                  - link "Events" [ref=e18] [cursor=pointer]:
                    - /url: "#/greenCity/events"
                - listitem [ref=e19]:
                  - link "Places" [ref=e20] [cursor=pointer]:
                    - /url: "#/greenCity/places"
                - listitem [ref=e21]:
                  - link "About us" [ref=e22] [cursor=pointer]:
                    - /url: "#/greenCity/about"
                - listitem [ref=e23]:
                  - link "My space" [ref=e24] [cursor=pointer]:
                    - /url: "#/greenCity/profile"
                - listitem [ref=e25]:
                  - link "UBS courier" [ref=e26] [cursor=pointer]:
                    - /url: "#/ubs"
            - menu [ref=e28]:
              - search "site search" [ref=e29] [cursor=pointer]
              - menu "language switcher" [ref=e31]:
                - option "english" [ref=e32] [cursor=pointer]:
                  - generic [aria-hidden] [ref=e33]: En
              - link "Sign in" [ref=e35] [cursor=pointer]
              - link "Sign up" [ref=e36] [cursor=pointer]
      - generic [ref=e39]:
        - generic "Tab To Main"
        - generic [ref=e40]:
          - generic [ref=e45]:
            - generic [ref=e46]:
              - generic [ref=e47]:
                - paragraph [ref=e48]: Events
                - generic [ref=e49]:
                  - generic [ref=e50] [cursor=pointer]
                  - generic [ref=e52] [cursor=pointer]
                  - img "my-event" [ref=e55] [cursor=pointer]
              - button "Create event" [ref=e57] [cursor=pointer]
            - generic [ref=e58]:
              - paragraph [ref=e59]: Filter
              - generic [ref=e60]:
                - generic [ref=e61] [cursor=pointer]:
                  - generic [ref=e62]: Event time
                  - combobox [active] [ref=e63]
                - generic [ref=e69] [cursor=pointer]:
                  - generic [ref=e70]: Location
                  - combobox [ref=e71]
                - generic [ref=e77] [cursor=pointer]:
                  - generic [ref=e78]: Status
                  - combobox [ref=e79]
                - generic [ref=e85] [cursor=pointer]:
                  - generic [ref=e86]: Type
                  - combobox [ref=e87]
                - generic [ref=e93] [cursor=pointer]: Date range
                - button "Reset all" [ref=e100] [cursor=pointer]
            - separator [ref=e101]
            - generic [ref=e102]:
              - paragraph [ref=e103]: 84 Items found
              - generic [ref=e104]:
                - generic [ref=e106]:
                  - generic [ref=e107]: Past
                  - img "cross" [ref=e109] [cursor=pointer]
                - generic [ref=e110]:
                  - button "table view" [pressed] [ref=e111] [cursor=pointer]:
                    - emphasis [ref=e112]: 
                  - button "list view" [ref=e113] [cursor=pointer]:
                    - emphasis [ref=e114]: 
            - generic [ref=e115]:
              - generic [ref=e118]:
                - generic [ref=e121]:
                  - generic [ref=e122]:
                    - img "*" [ref=e123]
                    - img "*" [ref=e124]
                    - img "*" [ref=e125]
                  - generic:
                    - img "*" [ref=e126]
                    - img "*" [ref=e127]
                    - img "*" [ref=e128]
                - img "event" [ref=e130]
                - generic [ref=e131]:
                  - generic [ref=e132]:
                    - list "filter by items" [ref=e133]:
                      - listitem [ref=e134]:
                        - button "Economic" [ref=e135] [cursor=pointer]
                    - generic [ref=e137]:
                      - generic [ref=e139]: Oct 10, 2026
                      - generic [ref=e140]: "|"
                      - generic [ref=e141]: 10:51 PM
                    - paragraph [ref=e144]:
                      - link "Online" [ref=e145] [cursor=pointer]:
                        - /url: https://www.greencity.cx.ua/#/greenCity/events/create-update-event
                    - generic [ref=e146]: Open
                    - paragraph [ref=e150]: Auto test event c348001c
                  - button "More" [ref=e152] [cursor=pointer]
                  - generic [ref=e153]:
                    - generic [ref=e154]:
                      - img "date" [ref=e155]
                      - paragraph [ref=e156]: Oct 03, 2026
                    - generic [ref=e157]:
                      - img "author" [ref=e158]
                      - paragraph [ref=e159]: Green
                    - generic [ref=e160]:
                      - img "frame" [ref=e161]
                      - paragraph [ref=e162]: "0"
                    - generic [ref=e163]:
                      - button "Like this event" [ref=e164] [cursor=pointer]:
                        - img "Like" [ref=e165]
                        - text: "0"
                      - button "Dislike this event" [ref=e166] [cursor=pointer]:
                        - img "Dislike" [ref=e167]
                        - text: "0"
              - generic [ref=e170]:
                - generic [ref=e173]:
                  - generic [ref=e174]:
                    - img "*" [ref=e175]
                    - img "*" [ref=e176]
                    - img "*" [ref=e177]
                  - generic:
                    - img "*" [ref=e178]
                    - img "*" [ref=e179]
                    - img "*" [ref=e180]
                - img "event" [ref=e182]
                - generic [ref=e183]:
                  - generic [ref=e184]:
                    - list "filter by items" [ref=e185]:
                      - listitem [ref=e186]:
                        - button "Economic" [ref=e187] [cursor=pointer]
                    - generic [ref=e189]:
                      - generic [ref=e191]: Oct 10, 2026
                      - generic [ref=e192]: "|"
                      - generic [ref=e193]: 10:49 PM
                    - paragraph [ref=e196]:
                      - link "Online" [ref=e197] [cursor=pointer]:
                        - /url: https://www.greencity.cx.ua/#/greenCity/events/create-update-event
                    - generic [ref=e198]: Open
                    - paragraph [ref=e202]: Auto test event 12db655a
                  - button "More" [ref=e204] [cursor=pointer]
                  - generic [ref=e205]:
                    - generic [ref=e206]:
                      - img "date" [ref=e207]
                      - paragraph [ref=e208]: Oct 03, 2026
                    - generic [ref=e209]:
                      - img "author" [ref=e210]
                      - paragraph [ref=e211]: Green
                    - generic [ref=e212]:
                      - img "frame" [ref=e213]
                      - paragraph [ref=e214]: "0"
                    - generic [ref=e215]:
                      - button "Like this event" [ref=e216] [cursor=pointer]:
                        - img "Like" [ref=e217]
                        - text: "0"
                      - button "Dislike this event" [ref=e218] [cursor=pointer]:
                        - img "Dislike" [ref=e219]
                        - text: "0"
              - generic [ref=e222]:
                - generic [ref=e225]:
                  - generic [ref=e226]:
                    - img "*" [ref=e227]
                    - img "*" [ref=e228]
                    - img "*" [ref=e229]
                  - generic:
                    - img "*" [ref=e230]
                    - img "*" [ref=e231]
                    - img "*" [ref=e232]
                - img "event" [ref=e234]
                - generic [ref=e235]:
                  - generic [ref=e236]:
                    - list "filter by items" [ref=e237]:
                      - listitem [ref=e238]:
                        - button "Economic" [ref=e239] [cursor=pointer]
                    - generic [ref=e241]:
                      - generic [ref=e243]: Oct 2, 2026
                      - generic [ref=e244]: "|"
                      - generic [ref=e245]: 6:00 PM
                    - paragraph [ref=e248]:
                      - link "Online" [ref=e249] [cursor=pointer]:
                        - /url: https://example.com/test-link
                    - generic [ref=e250]: Open
                    - paragraph [ref=e254]: Test Title Positive 65576233
                  - button "More" [ref=e256] [cursor=pointer]
                  - generic [ref=e257]:
                    - generic [ref=e258]:
                      - img "date" [ref=e259]
                      - paragraph [ref=e260]: Oct 01, 2026
                    - generic [ref=e261]:
                      - img "author" [ref=e262]
                      - paragraph [ref=e263]: TestATestA
                    - generic [ref=e264]:
                      - img "frame" [ref=e265]
                      - paragraph [ref=e266]: "0"
                    - generic [ref=e267]:
                      - button "Like this event" [ref=e268] [cursor=pointer]:
                        - img "Like" [ref=e269]
                        - text: "0"
                      - button "Dislike this event" [ref=e270] [cursor=pointer]:
                        - img "Dislike" [ref=e271]
                        - text: "0"
              - generic [ref=e274]:
                - generic [ref=e277]:
                  - generic [ref=e278]:
                    - img "*" [ref=e279]
                    - img "*" [ref=e280]
                    - img "*" [ref=e281]
                  - generic:
                    - img "*" [ref=e282]
                    - img "*" [ref=e283]
                    - img "*" [ref=e284]
                - img "event" [ref=e286]
                - generic [ref=e287]:
                  - generic [ref=e288]:
                    - list "filter by items" [ref=e289]:
                      - listitem [ref=e290]:
                        - button "Economic" [ref=e291] [cursor=pointer]
                    - generic [ref=e293]:
                      - generic [ref=e295]: Oct 2, 2026
                      - generic [ref=e296]: "|"
                      - generic [ref=e297]: 6:00 PM
                    - paragraph [ref=e300]:
                      - link "Online" [ref=e301] [cursor=pointer]:
                        - /url: https://example.com/test-link
                    - generic [ref=e302]: Open
                    - paragraph [ref=e306]: Test Title Positive 61736651
                  - button "More" [ref=e308] [cursor=pointer]
                  - generic [ref=e309]:
                    - generic [ref=e310]:
                      - img "date" [ref=e311]
                      - paragraph [ref=e312]: Oct 01, 2026
                    - generic [ref=e313]:
                      - img "author" [ref=e314]
                      - paragraph [ref=e315]: TestATestA
                    - generic [ref=e316]:
                      - img "frame" [ref=e317]
                      - paragraph [ref=e318]: "0"
                    - generic [ref=e319]:
                      - button "Like this event" [ref=e320] [cursor=pointer]:
                        - img "Like" [ref=e321]
                        - text: "1"
                      - button "Dislike this event" [ref=e322] [cursor=pointer]:
                        - img "Dislike" [ref=e323]
                        - text: "0"
              - generic [ref=e326]:
                - generic [ref=e329]:
                  - generic [ref=e330]:
                    - img "*" [ref=e331]
                    - img "*" [ref=e332]
                    - img "*" [ref=e333]
                  - generic:
                    - img "*" [ref=e334]
                    - img "*" [ref=e335]
                    - img "*" [ref=e336]
                - img "event" [ref=e338]
                - generic [ref=e339]:
                  - generic [ref=e340]:
                    - list "filter by items" [ref=e341]:
                      - listitem [ref=e342]:
                        - button "Economic" [ref=e343] [cursor=pointer]
                    - generic [ref=e345]:
                      - generic [ref=e347]: Oct 2, 2026
                      - generic [ref=e348]: "|"
                      - generic [ref=e349]: 6:00 PM
                    - paragraph [ref=e352]:
                      - link "Online" [ref=e353] [cursor=pointer]:
                        - /url: https://example.com/test-link
                    - generic [ref=e354]: Open
                    - paragraph [ref=e358]: Test Title Positive 61789124
                  - button "More" [ref=e360] [cursor=pointer]
                  - generic [ref=e361]:
                    - generic [ref=e362]:
                      - img "date" [ref=e363]
                      - paragraph [ref=e364]: Oct 01, 2026
                    - generic [ref=e365]:
                      - img "author" [ref=e366]
                      - paragraph [ref=e367]: TestATestA
                    - generic [ref=e368]:
                      - img "frame" [ref=e369]
                      - paragraph [ref=e370]: "0"
                    - generic [ref=e371]:
                      - button "Like this event" [ref=e372] [cursor=pointer]:
                        - img "Like" [ref=e373]
                        - text: "0"
                      - button "Dislike this event" [ref=e374] [cursor=pointer]:
                        - img "Dislike" [ref=e375]
                        - text: "0"
              - generic [ref=e378]:
                - generic [ref=e381]:
                  - generic [ref=e382]:
                    - img "*" [ref=e383]
                    - img "*" [ref=e384]
                    - img "*" [ref=e385]
                  - generic:
                    - img "*" [ref=e386]
                    - img "*" [ref=e387]
                    - img "*" [ref=e388]
                - img "event" [ref=e390]
                - generic [ref=e391]:
                  - generic [ref=e392]:
                    - list "filter by items" [ref=e393]:
                      - listitem [ref=e394]:
                        - button "Economic" [ref=e395] [cursor=pointer]
                    - generic [ref=e397]:
                      - generic [ref=e399]: Oct 2, 2026
                      - generic [ref=e400]: "|"
                      - generic [ref=e401]: 6:00 PM
                    - paragraph [ref=e404]:
                      - link "Online" [ref=e405] [cursor=pointer]:
                        - /url: https://example.com/test-link
                    - generic [ref=e406]: Open
                    - paragraph [ref=e410]: Test Title Positive 65568945
                  - button "More" [ref=e412] [cursor=pointer]
                  - generic [ref=e413]:
                    - generic [ref=e414]:
                      - img "date" [ref=e415]
                      - paragraph [ref=e416]: Oct 01, 2026
                    - generic [ref=e417]:
                      - img "author" [ref=e418]
                      - paragraph [ref=e419]: TestATestA
                    - generic [ref=e420]:
                      - img "frame" [ref=e421]
                      - paragraph [ref=e422]: "0"
                    - generic [ref=e423]:
                      - button "Like this event" [ref=e424] [cursor=pointer]:
                        - img "Like" [ref=e425]
                        - text: "0"
                      - button "Dislike this event" [ref=e426] [cursor=pointer]:
                        - img "Dislike" [ref=e427]
                        - text: "0"
              - generic [ref=e430]:
                - generic [ref=e433]:
                  - generic [ref=e434]:
                    - img "*" [ref=e435]
                    - img "*" [ref=e436]
                    - img "*" [ref=e437]
                  - generic:
                    - img "*" [ref=e438]
                    - img "*" [ref=e439]
                    - img "*" [ref=e440]
                - img "event" [ref=e442]
                - generic [ref=e443]:
                  - generic [ref=e444]:
                    - list "filter by items" [ref=e445]:
                      - listitem [ref=e446]:
                        - button "Economic" [ref=e447] [cursor=pointer]
                    - generic [ref=e449]:
                      - generic [ref=e451]: Oct 2, 2026
                      - generic [ref=e452]: "|"
                      - generic [ref=e453]: 6:00 PM
                    - paragraph [ref=e456]:
                      - link "Online" [ref=e457] [cursor=pointer]:
                        - /url: https://example.com/test-link
                    - generic [ref=e458]: Open
                    - paragraph [ref=e462]: Test Title Positive 65576233
                  - button "More" [ref=e464] [cursor=pointer]
                  - generic [ref=e465]:
                    - generic [ref=e466]:
                      - img "date" [ref=e467]
                      - paragraph [ref=e468]: Oct 01, 2026
                    - generic [ref=e469]:
                      - img "author" [ref=e470]
                      - paragraph [ref=e471]: TestATestA
                    - generic [ref=e472]:
                      - img "frame" [ref=e473]
                      - paragraph [ref=e474]: "0"
                    - generic [ref=e475]:
                      - button "Like this event" [ref=e476] [cursor=pointer]:
                        - img "Like" [ref=e477]
                        - text: "0"
                      - button "Dislike this event" [ref=e478] [cursor=pointer]:
                        - img "Dislike" [ref=e479]
                        - text: "0"
              - generic [ref=e482]:
                - generic [ref=e485]:
                  - generic [ref=e486]:
                    - img "*" [ref=e487]
                    - img "*" [ref=e488]
                    - img "*" [ref=e489]
                  - generic:
                    - img "*" [ref=e490]
                    - img "*" [ref=e491]
                    - img "*" [ref=e492]
                - img "event" [ref=e494]
                - generic [ref=e495]:
                  - generic [ref=e496]:
                    - list "filter by items" [ref=e497]:
                      - listitem [ref=e498]:
                        - button "Economic" [ref=e499] [cursor=pointer]
                    - generic [ref=e501]:
                      - generic [ref=e503]: Oct 2, 2026
                      - generic [ref=e504]: "|"
                      - generic [ref=e505]: 6:00 PM
                    - paragraph [ref=e508]:
                      - link "Online" [ref=e509] [cursor=pointer]:
                        - /url: https://example.com/test-link
                    - generic [ref=e510]: Open
                    - paragraph [ref=e514]: Test Title Positive 61736651
                  - button "More" [ref=e516] [cursor=pointer]
                  - generic [ref=e517]:
                    - generic [ref=e518]:
                      - img "date" [ref=e519]
                      - paragraph [ref=e520]: Oct 01, 2026
                    - generic [ref=e521]:
                      - img "author" [ref=e522]
                      - paragraph [ref=e523]: TestATestA
                    - generic [ref=e524]:
                      - img "frame" [ref=e525]
                      - paragraph [ref=e526]: "0"
                    - generic [ref=e527]:
                      - button "Like this event" [ref=e528] [cursor=pointer]:
                        - img "Like" [ref=e529]
                        - text: "1"
                      - button "Dislike this event" [ref=e530] [cursor=pointer]:
                        - img "Dislike" [ref=e531]
                        - text: "0"
              - generic [ref=e534]:
                - generic [ref=e537]:
                  - generic [ref=e538]:
                    - img "*" [ref=e539]
                    - img "*" [ref=e540]
                    - img "*" [ref=e541]
                  - generic:
                    - img "*" [ref=e542]
                    - img "*" [ref=e543]
                    - img "*" [ref=e544]
                - img "event" [ref=e546]
                - generic [ref=e547]:
                  - generic [ref=e548]:
                    - list "filter by items" [ref=e549]:
                      - listitem [ref=e550]:
                        - button "Economic" [ref=e551] [cursor=pointer]
                    - generic [ref=e553]:
                      - generic [ref=e555]: Oct 2, 2026
                      - generic [ref=e556]: "|"
                      - generic [ref=e557]: 4:30 PM
                    - paragraph [ref=e560]: Lviv Oblast, 7JQQ+C9 Richky
                    - generic [ref=e561]: Open
                    - paragraph [ref=e565]: New Automation Event 2026!
                  - button "More" [ref=e567] [cursor=pointer]
                  - generic [ref=e568]:
                    - generic [ref=e569]:
                      - img "date" [ref=e570]
                      - paragraph [ref=e571]: Sep 29, 2026
                    - generic [ref=e572]:
                      - img "author" [ref=e573]
                      - paragraph [ref=e574]: Світлана Ковальова
                    - generic [ref=e575]:
                      - img "frame" [ref=e576]
                      - paragraph [ref=e577]: "0"
                    - generic [ref=e578]:
                      - button "Like this event" [ref=e579] [cursor=pointer]:
                        - img "Like" [ref=e580]
                        - text: "0"
                      - button "Dislike this event" [ref=e581] [cursor=pointer]:
                        - img "Dislike" [ref=e582]
                        - text: "0"
              - generic [ref=e585]:
                - generic [ref=e588]:
                  - generic [ref=e589]:
                    - img "*" [ref=e590]
                    - img "*" [ref=e591]
                    - img "*" [ref=e592]
                  - generic:
                    - img "*" [ref=e593]
                    - img "*" [ref=e594]
                    - img "*" [ref=e595]
                - img "event" [ref=e597]
                - generic [ref=e598]:
                  - generic [ref=e599]:
                    - list "filter by items" [ref=e600]:
                      - listitem [ref=e601]:
                        - button "Economic" [ref=e602] [cursor=pointer]
                    - generic [ref=e604]:
                      - generic [ref=e606]: Oct 2, 2026
                      - generic [ref=e607]: "|"
                      - generic [ref=e608]: 3:00 PM
                    - paragraph [ref=e611]:
                      - link "Online" [ref=e612] [cursor=pointer]:
                        - /url: https://example.com/test-link
                    - generic [ref=e613]: Open
                    - paragraph [ref=e617]: Test Title Positive 60838084
                  - button "More" [ref=e619] [cursor=pointer]
                  - generic [ref=e620]:
                    - generic [ref=e621]:
                      - img "date" [ref=e622]
                      - paragraph [ref=e623]: Oct 01, 2026
                    - generic [ref=e624]:
                      - img "author" [ref=e625]
                      - paragraph [ref=e626]: AnanasTest
                    - generic [ref=e627]:
                      - img "frame" [ref=e628]
                      - paragraph [ref=e629]: "0"
                    - generic [ref=e630]:
                      - button "Like this event" [ref=e631] [cursor=pointer]:
                        - img "Like" [ref=e632]
                        - text: "0"
                      - button "Dislike this event" [ref=e633] [cursor=pointer]:
                        - img "Dislike" [ref=e634]
                        - text: "0"
              - generic [ref=e637]:
                - generic [ref=e640]:
                  - generic [ref=e641]:
                    - img "*" [ref=e642]
                    - img "*" [ref=e643]
                    - img "*" [ref=e644]
                  - generic:
                    - img "*" [ref=e645]
                    - img "*" [ref=e646]
                    - img "*" [ref=e647]
                - img "event" [ref=e649]
                - generic [ref=e650]:
                  - generic [ref=e651]:
                    - list "filter by items" [ref=e652]:
                      - listitem [ref=e653]:
                        - button "Economic" [ref=e654] [cursor=pointer]
                    - generic [ref=e656]:
                      - generic [ref=e658]: Oct 2, 2026
                      - generic [ref=e659]: "|"
                      - generic [ref=e660]: 3:00 PM
                    - paragraph [ref=e663]:
                      - link "Online" [ref=e664] [cursor=pointer]:
                        - /url: https://example.com/test-link
                    - generic [ref=e665]: Open
                    - paragraph [ref=e669]: Test Title Positive 1790860362...
                  - button "More" [ref=e671] [cursor=pointer]
                  - generic [ref=e672]:
                    - generic [ref=e673]:
                      - img "date" [ref=e674]
                      - paragraph [ref=e675]: Oct 01, 2026
                    - generic [ref=e676]:
                      - img "author" [ref=e677]
                      - paragraph [ref=e678]: AnanasTest
                    - generic [ref=e679]:
                      - img "frame" [ref=e680]
                      - paragraph [ref=e681]: "0"
                    - generic [ref=e682]:
                      - button "Like this event" [ref=e683] [cursor=pointer]:
                        - img "Like" [ref=e684]
                        - text: "0"
                      - button "Dislike this event" [ref=e685] [cursor=pointer]:
                        - img "Dislike" [ref=e686]
                        - text: "0"
              - generic [ref=e689]:
                - generic [ref=e692]:
                  - generic [ref=e693]:
                    - img "*" [ref=e694]
                    - img "*" [ref=e695]
                    - img "*" [ref=e696]
                  - generic:
                    - img "*" [ref=e697]
                    - img "*" [ref=e698]
                    - img "*" [ref=e699]
                - img "event" [ref=e701]
                - generic [ref=e702]:
                  - generic [ref=e703]:
                    - list "filter by items" [ref=e704]:
                      - listitem [ref=e705]:
                        - button "Economic" [ref=e706] [cursor=pointer]
                    - generic [ref=e708]:
                      - generic [ref=e710]: Oct 2, 2026
                      - generic [ref=e711]: "|"
                      - generic [ref=e712]: 3:00 PM
                    - paragraph [ref=e715]:
                      - link "Online" [ref=e716] [cursor=pointer]:
                        - /url: https://example.com/test-link
                    - generic [ref=e717]: Open
                    - paragraph [ref=e721]: Test Title Positive 60758502
                  - button "More" [ref=e723] [cursor=pointer]
                  - generic [ref=e724]:
                    - generic [ref=e725]:
                      - img "date" [ref=e726]
                      - paragraph [ref=e727]: Oct 01, 2026
                    - generic [ref=e728]:
                      - img "author" [ref=e729]
                      - paragraph [ref=e730]: AnanasTest
                    - generic [ref=e731]:
                      - img "frame" [ref=e732]
                      - paragraph [ref=e733]: "0"
                    - generic [ref=e734]:
                      - button "Like this event" [ref=e735] [cursor=pointer]:
                        - img "Like" [ref=e736]
                        - text: "0"
                      - button "Dislike this event" [ref=e737] [cursor=pointer]:
                        - img "Dislike" [ref=e738]
                        - text: "0"
              - generic [ref=e741]:
                - generic [ref=e744]:
                  - generic [ref=e745]:
                    - img "*" [ref=e746]
                    - img "*" [ref=e747]
                    - img "*" [ref=e748]
                  - generic:
                    - img "*" [ref=e749]
                    - img "*" [ref=e750]
                    - img "*" [ref=e751]
                - img "event" [ref=e753]
                - generic [ref=e754]:
                  - generic [ref=e755]:
                    - list "filter by items" [ref=e756]:
                      - listitem [ref=e757]:
                        - button "Economic" [ref=e758] [cursor=pointer]
                    - generic [ref=e760]:
                      - generic [ref=e762]: Oct 2, 2026
                      - generic [ref=e763]: "|"
                      - generic [ref=e764]: 3:00 PM
                    - paragraph [ref=e767]:
                      - link "Online" [ref=e768] [cursor=pointer]:
                        - /url: https://example.com/test-link
                    - generic [ref=e769]: Open
                    - paragraph [ref=e773]: Test Title Positive 60758502
                  - button "More" [ref=e775] [cursor=pointer]
                  - generic [ref=e776]:
                    - generic [ref=e777]:
                      - img "date" [ref=e778]
                      - paragraph [ref=e779]: Oct 01, 2026
                    - generic [ref=e780]:
                      - img "author" [ref=e781]
                      - paragraph [ref=e782]: AnanasTest
                    - generic [ref=e783]:
                      - img "frame" [ref=e784]
                      - paragraph [ref=e785]: "0"
                    - generic [ref=e786]:
                      - button "Like this event" [ref=e787] [cursor=pointer]:
                        - img "Like" [ref=e788]
                        - text: "0"
                      - button "Dislike this event" [ref=e789] [cursor=pointer]:
                        - img "Dislike" [ref=e790]
                        - text: "0"
              - generic [ref=e793]:
                - generic [ref=e796]:
                  - generic [ref=e797]:
                    - img "*" [ref=e798]
                    - img "*" [ref=e799]
                    - img "*" [ref=e800]
                  - generic:
                    - img "*" [ref=e801]
                    - img "*" [ref=e802]
                    - img "*" [ref=e803]
                - img "event" [ref=e805]
                - generic [ref=e806]:
                  - generic [ref=e807]:
                    - list "filter by items" [ref=e808]:
                      - listitem [ref=e809]:
                        - button "Economic" [ref=e810] [cursor=pointer]
                    - generic [ref=e812]:
                      - generic [ref=e814]: Oct 2, 2026
                      - generic [ref=e815]: "|"
                      - generic [ref=e816]: 3:00 PM
                    - paragraph [ref=e819]:
                      - link "Online" [ref=e820] [cursor=pointer]:
                        - /url: https://example.com/test-link
                    - generic [ref=e821]: Open
                    - paragraph [ref=e825]: Test Title Positive 1790860362...
                  - button "More" [ref=e827] [cursor=pointer]
                  - generic [ref=e828]:
                    - generic [ref=e829]:
                      - img "date" [ref=e830]
                      - paragraph [ref=e831]: Oct 01, 2026
                    - generic [ref=e832]:
                      - img "author" [ref=e833]
                      - paragraph [ref=e834]: AnanasTest
                    - generic [ref=e835]:
                      - img "frame" [ref=e836]
                      - paragraph [ref=e837]: "0"
                    - generic [ref=e838]:
                      - button "Like this event" [ref=e839] [cursor=pointer]:
                        - img "Like" [ref=e840]
                        - text: "0"
                      - button "Dislike this event" [ref=e841] [cursor=pointer]:
                        - img "Dislike" [ref=e842]
                        - text: "0"
              - generic [ref=e845]:
                - generic [ref=e848]:
                  - generic [ref=e849]:
                    - img "*" [ref=e850]
                    - img "*" [ref=e851]
                    - img "*" [ref=e852]
                  - generic:
                    - img "*" [ref=e853]
                    - img "*" [ref=e854]
                    - img "*" [ref=e855]
                - img "event" [ref=e857]
                - generic [ref=e858]:
                  - generic [ref=e859]:
                    - list "filter by items" [ref=e860]:
                      - listitem [ref=e861]:
                        - button "Economic" [ref=e862] [cursor=pointer]
                    - generic [ref=e864]:
                      - generic [ref=e866]: Oct 2, 2026
                      - generic [ref=e867]: "|"
                      - generic [ref=e868]: 3:00 PM
                    - paragraph [ref=e871]:
                      - link "Online" [ref=e872] [cursor=pointer]:
                        - /url: https://example.com/test-link
                    - generic [ref=e873]: Open
                    - paragraph [ref=e877]: Test Title Positive 60825602
                  - button "More" [ref=e879] [cursor=pointer]
                  - generic [ref=e880]:
                    - generic [ref=e881]:
                      - img "date" [ref=e882]
                      - paragraph [ref=e883]: Oct 01, 2026
                    - generic [ref=e884]:
                      - img "author" [ref=e885]
                      - paragraph [ref=e886]: AnanasTest
                    - generic [ref=e887]:
                      - img "frame" [ref=e888]
                      - paragraph [ref=e889]: "0"
                    - generic [ref=e890]:
                      - button "Like this event" [ref=e891] [cursor=pointer]:
                        - img "Like" [ref=e892]
                        - text: "0"
                      - button "Dislike this event" [ref=e893] [cursor=pointer]:
                        - img "Dislike" [ref=e894]
                        - text: "0"
              - generic [ref=e897]:
                - generic [ref=e900]:
                  - generic [ref=e901]:
                    - img "*" [ref=e902]
                    - img "*" [ref=e903]
                    - img "*" [ref=e904]
                  - generic:
                    - img "*" [ref=e905]
                    - img "*" [ref=e906]
                    - img "*" [ref=e907]
                - img "event" [ref=e909]
                - generic [ref=e910]:
                  - generic [ref=e911]:
                    - list "filter by items" [ref=e912]:
                      - listitem [ref=e913]:
                        - button "Economic" [ref=e914] [cursor=pointer]
                    - generic [ref=e916]:
                      - generic [ref=e918]: Oct 2, 2026
                      - generic [ref=e919]: "|"
                      - generic [ref=e920]: 3:00 PM
                    - paragraph [ref=e923]:
                      - link "Online" [ref=e924] [cursor=pointer]:
                        - /url: https://example.com/test-link
                    - generic [ref=e925]: Open
                    - paragraph [ref=e929]: Test Title Positive 63532975
                  - button "More" [ref=e931] [cursor=pointer]
                  - generic [ref=e932]:
                    - generic [ref=e933]:
                      - img "date" [ref=e934]
                      - paragraph [ref=e935]: Oct 01, 2026
                    - generic [ref=e936]:
                      - img "author" [ref=e937]
                      - paragraph [ref=e938]: AnanasTest
                    - generic [ref=e939]:
                      - img "frame" [ref=e940]
                      - paragraph [ref=e941]: "0"
                    - generic [ref=e942]:
                      - button "Like this event" [ref=e943] [cursor=pointer]:
                        - img "Like" [ref=e944]
                        - text: "0"
                      - button "Dislike this event" [ref=e945] [cursor=pointer]:
                        - img "Dislike" [ref=e946]
                        - text: "0"
              - generic [ref=e949]:
                - generic [ref=e952]:
                  - generic [ref=e953]:
                    - img "*" [ref=e954]
                    - img "*" [ref=e955]
                    - img "*" [ref=e956]
                  - generic:
                    - img "*" [ref=e957]
                    - img "*" [ref=e958]
                    - img "*" [ref=e959]
                - img "event" [ref=e961]
                - generic [ref=e962]:
                  - generic [ref=e963]:
                    - list "filter by items" [ref=e964]:
                      - listitem [ref=e965]:
                        - button "Economic" [ref=e966] [cursor=pointer]
                    - generic [ref=e968]:
                      - generic [ref=e970]: Oct 2, 2026
                      - generic [ref=e971]: "|"
                      - generic [ref=e972]: 3:00 PM
                    - paragraph [ref=e975]:
                      - link "Online" [ref=e976] [cursor=pointer]:
                        - /url: https://example.com/test-link
                    - generic [ref=e977]: Open
                    - paragraph [ref=e981]: Test Title Positive 63520173
                  - button "More" [ref=e983] [cursor=pointer]
                  - generic [ref=e984]:
                    - generic [ref=e985]:
                      - img "date" [ref=e986]
                      - paragraph [ref=e987]: Oct 01, 2026
                    - generic [ref=e988]:
                      - img "author" [ref=e989]
                      - paragraph [ref=e990]: AnanasTest
                    - generic [ref=e991]:
                      - img "frame" [ref=e992]
                      - paragraph [ref=e993]: "0"
                    - generic [ref=e994]:
                      - button "Like this event" [ref=e995] [cursor=pointer]:
                        - img "Like" [ref=e996]
                        - text: "0"
                      - button "Dislike this event" [ref=e997] [cursor=pointer]:
                        - img "Dislike" [ref=e998]
                        - text: "0"
              - generic [ref=e1001]:
                - generic [ref=e1004]:
                  - generic [ref=e1005]:
                    - img "*" [ref=e1006]
                    - img "*" [ref=e1007]
                    - img "*" [ref=e1008]
                  - generic:
                    - img "*" [ref=e1009]
                    - img "*" [ref=e1010]
                    - img "*" [ref=e1011]
                - img "event" [ref=e1013]
                - generic [ref=e1014]:
                  - generic [ref=e1015]:
                    - list "filter by items" [ref=e1016]:
                      - listitem [ref=e1017]:
                        - button "Social" [ref=e1018] [cursor=pointer]
                    - generic [ref=e1020]:
                      - generic [ref=e1022]: Oct 1, 2026
                      - generic [ref=e1023]: "|"
                      - generic [ref=e1024]: 5:00 PM
                    - paragraph [ref=e1027]: Odesa, Pastera Street, 62
                    - generic [ref=e1028]: Open
                    - paragraph [ref=e1032]: Test
                  - button "More" [ref=e1034] [cursor=pointer]
                  - generic [ref=e1035]:
                    - generic [ref=e1036]:
                      - img "date" [ref=e1037]
                      - paragraph [ref=e1038]: Oct 01, 2026
                    - generic [ref=e1039]:
                      - img "author" [ref=e1040]
                      - paragraph [ref=e1041]: Лілія Яріш
                    - generic [ref=e1042]:
                      - img "frame" [ref=e1043]
                      - paragraph [ref=e1044]: "0"
                    - generic [ref=e1045]:
                      - button "Like this event" [ref=e1046] [cursor=pointer]:
                        - img "Like" [ref=e1047]
                        - text: "0"
                      - button "Dislike this event" [ref=e1048] [cursor=pointer]:
                        - img "Dislike" [ref=e1049]
                        - text: "0"
              - generic [ref=e1052]:
                - generic [ref=e1055]:
                  - generic [ref=e1056]:
                    - img "*" [ref=e1057]
                    - img "*" [ref=e1058]
                    - img "*" [ref=e1059]
                  - generic:
                    - img "*" [ref=e1060]
                    - img "*" [ref=e1061]
                    - img "*" [ref=e1062]
                - img "event" [ref=e1064]
                - generic [ref=e1065]:
                  - generic [ref=e1066]:
                    - list "filter by items" [ref=e1067]:
                      - listitem [ref=e1068]:
                        - button "Economic" [ref=e1069] [cursor=pointer]
                    - generic [ref=e1071]:
                      - generic [ref=e1073]: Oct 1, 2026
                      - generic [ref=e1074]: "|"
                      - generic [ref=e1075]: 4:00 PM
                    - paragraph [ref=e1078]: Lviv Oblast, 5R95+M2 Kulynychi
                    - generic [ref=e1079]: Open
                    - paragraph [ref=e1083]: test event
                  - button "More" [ref=e1085] [cursor=pointer]
                  - generic [ref=e1086]:
                    - generic [ref=e1087]:
                      - img "date" [ref=e1088]
                      - paragraph [ref=e1089]: Oct 01, 2026
                    - generic [ref=e1090]:
                      - img "author" [ref=e1091]
                      - paragraph [ref=e1092]: dfs
                    - generic [ref=e1093]:
                      - img "frame" [ref=e1094]
                      - paragraph [ref=e1095]: "0"
                    - generic [ref=e1096]:
                      - button "Like this event" [ref=e1097] [cursor=pointer]:
                        - img "Like" [ref=e1098]
                        - text: "0"
                      - button "Dislike this event" [ref=e1099] [cursor=pointer]:
                        - img "Dislike" [ref=e1100]
                        - text: "0"
              - generic [ref=e1103]:
                - generic [ref=e1106]:
                  - generic [ref=e1107]:
                    - img "*" [ref=e1108]
                    - img "*" [ref=e1109]
                    - img "*" [ref=e1110]
                  - generic:
                    - img "*" [ref=e1111]
                    - img "*" [ref=e1112]
                    - img "*" [ref=e1113]
                - img "event" [ref=e1115]
                - generic [ref=e1116]:
                  - generic [ref=e1117]:
                    - list "filter by items" [ref=e1118]:
                      - listitem [ref=e1119]:
                        - button "Economic" [ref=e1120] [cursor=pointer]
                    - generic [ref=e1122]:
                      - generic [ref=e1124]: Oct 1, 2026
                      - generic [ref=e1125]: "|"
                      - generic [ref=e1126]: 8:30 AM
                    - paragraph [ref=e1129]:
                      - link "Online" [ref=e1130] [cursor=pointer]:
                        - /url: https://somelink.com
                    - generic [ref=e1131]: Open
                    - paragraph [ref=e1135]: fdkskfs
                  - button "More" [ref=e1137] [cursor=pointer]
                  - generic [ref=e1138]:
                    - generic [ref=e1139]:
                      - img "date" [ref=e1140]
                      - paragraph [ref=e1141]: Oct 01, 2026
                    - generic [ref=e1142]:
                      - img "author" [ref=e1143]
                      - paragraph [ref=e1144]: Max
                    - generic [ref=e1145]:
                      - img "frame" [ref=e1146]
                      - paragraph [ref=e1147]: "0"
                    - generic [ref=e1148]:
                      - button "Like this event" [ref=e1149] [cursor=pointer]:
                        - img "Like" [ref=e1150]
                        - text: "0"
                      - button "Dislike this event" [ref=e1151] [cursor=pointer]:
                        - img "Dislike" [ref=e1152]
                        - text: "0"
              - generic [ref=e1155]:
                - generic [ref=e1158]:
                  - generic [ref=e1159]:
                    - img "*" [ref=e1160]
                    - img "*" [ref=e1161]
                    - img "*" [ref=e1162]
                  - generic:
                    - img "*" [ref=e1163]
                    - img "*" [ref=e1164]
                    - img "*" [ref=e1165]
                - img "event" [ref=e1167]
                - generic [ref=e1168]:
                  - generic [ref=e1169]:
                    - list "filter by items" [ref=e1170]:
                      - listitem [ref=e1171]:
                        - button "Economic" [ref=e1172] [cursor=pointer]
                    - generic [ref=e1174]:
                      - generic [ref=e1176]: Sep 30, 2026
                      - generic [ref=e1177]: "|"
                      - generic [ref=e1178]: 12:00 PM
                    - paragraph [ref=e1181]: Lviv Oblast, V8GF+FH Novyi Yarychiv
                    - generic [ref=e1182]: Open
                    - paragraph [ref=e1186]: dfssdfs
                  - button "More" [ref=e1188] [cursor=pointer]
                  - generic [ref=e1189]:
                    - generic [ref=e1190]:
                      - img "date" [ref=e1191]
                      - paragraph [ref=e1192]: Sep 30, 2026
                    - generic [ref=e1193]:
                      - img "author" [ref=e1194]
                      - paragraph [ref=e1195]: dfs
                    - generic [ref=e1196]:
                      - img "frame" [ref=e1197]
                      - paragraph [ref=e1198]: "0"
                    - generic [ref=e1199]:
                      - button "Like this event" [ref=e1200] [cursor=pointer]:
                        - img "Like" [ref=e1201]
                        - text: "0"
                      - button "Dislike this event" [ref=e1202] [cursor=pointer]:
                        - img "Dislike" [ref=e1203]
                        - text: "0"
              - generic [ref=e1206]:
                - generic [ref=e1209]:
                  - generic [ref=e1210]:
                    - img "*" [ref=e1211]
                    - img "*" [ref=e1212]
                    - img "*" [ref=e1213]
                  - generic:
                    - img "*" [ref=e1214]
                    - img "*" [ref=e1215]
                    - img "*" [ref=e1216]
                - img "event" [ref=e1218]
                - generic [ref=e1219]:
                  - generic [ref=e1220]:
                    - list "filter by items" [ref=e1221]:
                      - listitem [ref=e1222]:
                        - button "Economic |" [ref=e1223] [cursor=pointer]:
                          - generic [ref=e1224]: Economic
                          - generic [ref=e1225]: "|"
                      - listitem [ref=e1226]:
                        - button "Social" [ref=e1227] [cursor=pointer]
                    - generic [ref=e1229]:
                      - generic [ref=e1231]: Sep 23, 2026
                      - generic [ref=e1232]: "|"
                      - generic [ref=e1233]: 1:00 PM
                    - paragraph [ref=e1236]: L'viv, Vasylya Stusa Street, 4
                    - generic [ref=e1237]: Open
                    - paragraph [ref=e1241]: dadds
                  - button "More" [ref=e1243] [cursor=pointer]
                  - generic [ref=e1244]:
                    - generic [ref=e1245]:
                      - img "date" [ref=e1246]
                      - paragraph [ref=e1247]: Sep 23, 2026
                    - generic [ref=e1248]:
                      - img "author" [ref=e1249]
                      - paragraph [ref=e1250]: Max
                    - generic [ref=e1251]:
                      - img "frame" [ref=e1252]
                      - paragraph [ref=e1253]: "0"
                    - generic [ref=e1254]:
                      - button "Like this event" [ref=e1255] [cursor=pointer]:
                        - img "Like" [ref=e1256]
                        - text: "0"
                      - button "Dislike this event" [ref=e1257] [cursor=pointer]:
                        - img "Dislike" [ref=e1258]
                        - text: "0"
              - generic [ref=e1261]:
                - generic [ref=e1264]:
                  - generic [ref=e1265]:
                    - img "*" [ref=e1266]
                    - img "*" [ref=e1267]
                    - img "*" [ref=e1268]
                  - generic:
                    - img "*" [ref=e1269]
                    - img "*" [ref=e1270]
                    - img "*" [ref=e1271]
                - img "event" [ref=e1273]
                - generic [ref=e1274]:
                  - generic [ref=e1275]:
                    - list "filter by items" [ref=e1276]:
                      - listitem [ref=e1277]:
                        - button "Social" [ref=e1278] [cursor=pointer]
                    - generic [ref=e1280]:
                      - generic [ref=e1282]: Sep 18, 2026
                      - generic [ref=e1283]: "|"
                      - generic [ref=e1284]: 12:00 PM
                    - paragraph [ref=e1287]: Lviv Oblast, R54Q+4X Pidberiztsi
                    - generic [ref=e1288]: Open
                    - paragraph [ref=e1292]: asdaaasdadasdaada
                  - button "More" [ref=e1294] [cursor=pointer]
                  - generic [ref=e1295]:
                    - generic [ref=e1296]:
                      - img "date" [ref=e1297]
                      - paragraph [ref=e1298]: Sep 18, 2026
                    - generic [ref=e1299]:
                      - img "author" [ref=e1300]
                      - paragraph [ref=e1301]: Viacheslav
                    - generic [ref=e1302]:
                      - img "frame" [ref=e1303]
                      - paragraph [ref=e1304]: "0"
                    - generic [ref=e1305]:
                      - button "Like this event" [ref=e1306] [cursor=pointer]:
                        - img "Like" [ref=e1307]
                        - text: "0"
                      - button "Dislike this event" [ref=e1308] [cursor=pointer]:
                        - img "Dislike" [ref=e1309]
                        - text: "0"
              - generic [ref=e1312]:
                - generic [ref=e1315]:
                  - generic [ref=e1316]:
                    - img "*" [ref=e1317]
                    - img "*" [ref=e1318]
                    - img "*" [ref=e1319]
                  - generic:
                    - img "*" [ref=e1320]
                    - img "*" [ref=e1321]
                    - img "*" [ref=e1322]
                - img "event" [ref=e1324]
                - generic [ref=e1325]:
                  - generic [ref=e1326]:
                    - list "filter by items" [ref=e1327]:
                      - listitem [ref=e1328]:
                        - button "Social" [ref=e1329] [cursor=pointer]
                    - generic [ref=e1331]:
                      - generic [ref=e1333]: Sep 17, 2026
                      - generic [ref=e1334]: "|"
                      - generic [ref=e1335]: 10:00 AM
                    - paragraph [ref=e1338]:
                      - link "Online" [ref=e1339] [cursor=pointer]:
                        - /url: https://www.greencity.cx.ua/#/greenCity/events/create-update-event
                    - generic [ref=e1340]: Closed
                    - paragraph [ref=e1344]: "123"
                  - button "More" [ref=e1346] [cursor=pointer]
                  - generic [ref=e1347]:
                    - generic [ref=e1348]:
                      - img "date" [ref=e1349]
                      - paragraph [ref=e1350]: Sep 17, 2026
                    - generic [ref=e1351]:
                      - img "author" [ref=e1352]
                      - paragraph [ref=e1353]: Abc123
                    - generic [ref=e1354]:
                      - img "frame" [ref=e1355]
                      - paragraph [ref=e1356]: "1"
                    - generic [ref=e1357]:
                      - button "Like this event" [ref=e1358] [cursor=pointer]:
                        - img "Like" [ref=e1359]
                        - text: "0"
                      - button "Dislike this event" [ref=e1360] [cursor=pointer]:
                        - img "Dislike" [ref=e1361]
                        - text: "0"
              - generic [ref=e1364]:
                - generic [ref=e1367]:
                  - generic [ref=e1368]:
                    - img "*" [ref=e1369]
                    - img "*" [ref=e1370]
                    - img "*" [ref=e1371]
                  - generic [ref=e1372]:
                    - img "*" [ref=e1373]
                    - img "*" [ref=e1374]
                    - img "*" [ref=e1375]
                - generic [ref=e1376]: "+1"
                - img "event" [ref=e1381]
                - generic [ref=e1382]:
                  - generic [ref=e1383]:
                    - list "filter by items" [ref=e1384]:
                      - listitem [ref=e1385]:
                        - button "Economic" [ref=e1386] [cursor=pointer]
                    - generic [ref=e1388]:
                      - generic [ref=e1390]: Sep 15, 2026
                      - generic [ref=e1391]: "|"
                      - generic [ref=e1392]: 4:30 PM
                    - paragraph [ref=e1395]: Lviv Oblast, 7JQQ+C9 Richky
                    - generic [ref=e1396]: Open
                    - paragraph [ref=e1400]: Updated Automation Event 2026
                  - button "More" [ref=e1402] [cursor=pointer]
                  - generic [ref=e1403]:
                    - generic [ref=e1404]:
                      - img "date" [ref=e1405]
                      - paragraph [ref=e1406]: Sep 14, 2026
                    - generic [ref=e1407]:
                      - img "author" [ref=e1408]
                      - paragraph [ref=e1409]: Abc123
                    - generic [ref=e1410]:
                      - img "frame" [ref=e1411]
                      - paragraph [ref=e1412]: "74"
                    - generic [ref=e1413]:
                      - button "Like this event" [ref=e1414] [cursor=pointer]:
                        - img "Like" [ref=e1415]
                        - text: "1"
                      - button "Dislike this event" [ref=e1416] [cursor=pointer]:
                        - img "Dislike" [ref=e1417]
                        - text: "0"
              - generic [ref=e1420]:
                - generic [ref=e1423]:
                  - generic [ref=e1424]:
                    - img "*" [ref=e1425]
                    - img "*" [ref=e1426]
                    - img "*" [ref=e1427]
                  - generic:
                    - img "*" [ref=e1428]
                    - img "*" [ref=e1429]
                    - img "*" [ref=e1430]
                - img "event" [ref=e1432]
                - generic [ref=e1433]:
                  - generic [ref=e1434]:
                    - list "filter by items" [ref=e1435]:
                      - listitem [ref=e1436]:
                        - button "Economic" [ref=e1437] [cursor=pointer]
                    - generic [ref=e1439]:
                      - generic [ref=e1441]: Aug 26, 2026
                      - generic [ref=e1442]: "|"
                      - generic [ref=e1443]: 10:30 AM
                    - paragraph [ref=e1446]: Odesa, Kyivske Highway, 10
                    - generic [ref=e1447]: Open
                    - paragraph [ref=e1451]: віаіва
                  - button "More" [ref=e1453] [cursor=pointer]
                  - generic [ref=e1454]:
                    - generic [ref=e1455]:
                      - img "date" [ref=e1456]
                      - paragraph [ref=e1457]: Aug 24, 2026
                    - generic [ref=e1458]:
                      - img "author" [ref=e1459]
                      - paragraph [ref=e1460]: Yurii Kravchuc
                    - generic [ref=e1461]:
                      - img "frame" [ref=e1462]
                      - paragraph [ref=e1463]: "0"
                    - generic [ref=e1464]:
                      - button "Like this event" [ref=e1465] [cursor=pointer]:
                        - img "Like" [ref=e1466]
                        - text: "0"
                      - button "Dislike this event" [ref=e1467] [cursor=pointer]:
                        - img "Dislike" [ref=e1468]
                        - text: "0"
              - generic [ref=e1471]:
                - generic [ref=e1474]:
                  - generic [ref=e1475]:
                    - img "*" [ref=e1476]
                    - img "*" [ref=e1477]
                    - img "*" [ref=e1478]
                  - generic:
                    - img "*" [ref=e1479]
                    - img "*" [ref=e1480]
                    - img "*" [ref=e1481]
                - img "event" [ref=e1483]
                - generic [ref=e1484]:
                  - generic [ref=e1485]:
                    - list "filter by items" [ref=e1486]:
                      - listitem [ref=e1487]:
                        - button "Social" [ref=e1488] [cursor=pointer]
                    - generic [ref=e1490]:
                      - generic [ref=e1492]: Jun 24, 2026
                      - generic [ref=e1493]: "|"
                      - generic [ref=e1494]: 4:42 PM
                    - paragraph [ref=e1497]: Iraq, 7H5Q+HH Shaikh Ibrahim
                    - generic [ref=e1498]: Open
                    - paragraph [ref=e1502]: Test Event For Swagger
                  - button "More" [ref=e1504] [cursor=pointer]
                  - generic [ref=e1505]:
                    - generic [ref=e1506]:
                      - img "date" [ref=e1507]
                      - paragraph [ref=e1508]: Jun 23, 2026
                    - generic [ref=e1509]:
                      - img "author" [ref=e1510]
                      - paragraph [ref=e1511]: Olhen
                    - generic [ref=e1512]:
                      - img "frame" [ref=e1513]
                      - paragraph [ref=e1514]: "0"
                    - generic [ref=e1515]:
                      - button "Like this event" [ref=e1516] [cursor=pointer]:
                        - img "Like" [ref=e1517]
                        - text: "0"
                      - button "Dislike this event" [ref=e1518] [cursor=pointer]:
                        - img "Dislike" [ref=e1519]
                        - text: "0"
              - generic [ref=e1522]:
                - generic [ref=e1525]:
                  - generic [ref=e1526]:
                    - img "*" [ref=e1527]
                    - img "*" [ref=e1528]
                    - img "*" [ref=e1529]
                  - generic:
                    - img "*" [ref=e1530]
                    - img "*" [ref=e1531]
                    - img "*" [ref=e1532]
                - generic [ref=e1533]: "+1"
                - img "event" [ref=e1538]
                - generic [ref=e1539]:
                  - generic [ref=e1540]:
                    - list "filter by items" [ref=e1541]:
                      - listitem [ref=e1542]:
                        - button "Environmental" [ref=e1543] [cursor=pointer]
                    - generic [ref=e1545]:
                      - generic [ref=e1547]: Jun 20, 2026
                      - generic [ref=e1548]: "|"
                      - generic [ref=e1549]: 6:47 AM
                    - paragraph [ref=e1552]: Lypnyky, PXCX+7P
                    - generic [ref=e1553]: Open
                    - paragraph [ref=e1557]: Eco fest
                  - button "More" [ref=e1559] [cursor=pointer]
                  - generic [ref=e1560]:
                    - generic [ref=e1561]:
                      - img "date" [ref=e1562]
                      - paragraph [ref=e1563]: Apr 15, 2026
                    - generic [ref=e1564]:
                      - img "author" [ref=e1565]
                      - paragraph [ref=e1566]: Тетяна K
                    - generic [ref=e1567]:
                      - img "frame" [ref=e1568]
                      - paragraph [ref=e1569]: "0"
                    - generic [ref=e1570]:
                      - button "Like this event" [ref=e1571] [cursor=pointer]:
                        - img "Like" [ref=e1572]
                        - text: "0"
                      - button "Dislike this event" [ref=e1573] [cursor=pointer]:
                        - img "Dislike" [ref=e1574]
                        - text: "0"
              - generic [ref=e1577]:
                - generic [ref=e1580]:
                  - generic [ref=e1581]:
                    - img "*" [ref=e1582]
                    - img "*" [ref=e1583]
                    - img "*" [ref=e1584]
                  - generic:
                    - img "*" [ref=e1585]
                    - img "*" [ref=e1586]
                    - img "*" [ref=e1587]
                - img "event" [ref=e1589]
                - generic [ref=e1590]:
                  - generic [ref=e1591]:
                    - list "filter by items" [ref=e1592]:
                      - listitem [ref=e1593]:
                        - button "Social" [ref=e1594] [cursor=pointer]
                    - generic [ref=e1596]:
                      - generic [ref=e1598]: Jun 19, 2026
                      - generic [ref=e1599]: "|"
                      - generic [ref=e1600]: 7:31 AM
                    - paragraph [ref=e1603]: Dnipropetrovsk Oblast, F4R3+MR Dnipro
                    - generic [ref=e1604]: Open
                    - paragraph [ref=e1608]: Test Event for Update
                  - button "More" [ref=e1610] [cursor=pointer]
                  - generic [ref=e1611]:
                    - generic [ref=e1612]:
                      - img "date" [ref=e1613]
                      - paragraph [ref=e1614]: May 20, 2026
                    - generic [ref=e1615]:
                      - img "author" [ref=e1616]
                      - paragraph [ref=e1617]: TestATestA
                    - generic [ref=e1618]:
                      - img "frame" [ref=e1619]
                      - paragraph [ref=e1620]: "0"
                    - generic [ref=e1621]:
                      - button "Like this event" [ref=e1622] [cursor=pointer]:
                        - img "Like" [ref=e1623]
                        - text: "0"
                      - button "Dislike this event" [ref=e1624] [cursor=pointer]:
                        - img "Dislike" [ref=e1625]
                        - text: "0"
              - generic [ref=e1628]:
                - generic [ref=e1631]:
                  - generic [ref=e1632]:
                    - img "*" [ref=e1633]
                    - img "*" [ref=e1634]
                    - img "*" [ref=e1635]
                  - generic:
                    - img "*" [ref=e1636]
                    - img "*" [ref=e1637]
                    - img "*" [ref=e1638]
                - img "event" [ref=e1640]
                - generic [ref=e1641]:
                  - generic [ref=e1642]:
                    - list "filter by items" [ref=e1643]:
                      - listitem [ref=e1644]:
                        - button "Social" [ref=e1645] [cursor=pointer]
                    - generic [ref=e1647]:
                      - generic [ref=e1649]: Jun 19, 2026
                      - generic [ref=e1650]: "|"
                      - generic [ref=e1651]: 7:30 AM
                    - paragraph [ref=e1654]: Dnipropetrovsk Oblast, F4R3+MR Dnipro
                    - generic [ref=e1655]: Open
                    - paragraph [ref=e1659]: Test Event for Creation
                  - button "More" [ref=e1661] [cursor=pointer]
                  - generic [ref=e1662]:
                    - generic [ref=e1663]:
                      - img "date" [ref=e1664]
                      - paragraph [ref=e1665]: May 20, 2026
                    - generic [ref=e1666]:
                      - img "author" [ref=e1667]
                      - paragraph [ref=e1668]: TestATestA
                    - generic [ref=e1669]:
                      - img "frame" [ref=e1670]
                      - paragraph [ref=e1671]: "0"
                    - generic [ref=e1672]:
                      - button "Like this event" [ref=e1673] [cursor=pointer]:
                        - img "Like" [ref=e1674]
                        - text: "0"
                      - button "Dislike this event" [ref=e1675] [cursor=pointer]:
                        - img "Dislike" [ref=e1676]
                        - text: "0"
              - generic [ref=e1679]:
                - generic [ref=e1682]:
                  - generic [ref=e1683]:
                    - img "*" [ref=e1684]
                    - img "*" [ref=e1685]
                    - img "*" [ref=e1686]
                  - generic:
                    - img "*" [ref=e1687]
                    - img "*" [ref=e1688]
                    - img "*" [ref=e1689]
                - img "event" [ref=e1691]
                - generic [ref=e1692]:
                  - generic [ref=e1693]:
                    - list "filter by items" [ref=e1694]:
                      - listitem [ref=e1695]:
                        - button "Social" [ref=e1696] [cursor=pointer]
                    - generic [ref=e1698]:
                      - generic [ref=e1700]: Jun 15, 2026
                      - generic [ref=e1701]: "|"
                      - generic [ref=e1702]: 1:00 PM
                    - paragraph [ref=e1705]: office 113, st. Svetlitsky 35
                    - generic [ref=e1706]: Open
                    - paragraph [ref=e1710]: Updated Test Event
                  - button "More" [ref=e1712] [cursor=pointer]
                  - generic [ref=e1713]:
                    - generic [ref=e1714]:
                      - img "date" [ref=e1715]
                      - paragraph [ref=e1716]: May 10, 2026
                    - generic [ref=e1717]:
                      - img "author" [ref=e1718]
                      - paragraph [ref=e1719]: TestATestA
                    - generic [ref=e1720]:
                      - img "frame" [ref=e1721]
                      - paragraph [ref=e1722]: "0"
                    - generic [ref=e1723]:
                      - button "Like this event" [ref=e1724] [cursor=pointer]:
                        - img "Like" [ref=e1725]
                        - text: "0"
                      - button "Dislike this event" [ref=e1726] [cursor=pointer]:
                        - img "Dislike" [ref=e1727]
                        - text: "0"
              - generic [ref=e1730]:
                - generic [ref=e1733]:
                  - generic [ref=e1734]:
                    - img "*" [ref=e1735]
                    - img "*" [ref=e1736]
                    - img "*" [ref=e1737]
                  - generic:
                    - img "*" [ref=e1738]
                    - img "*" [ref=e1739]
                    - img "*" [ref=e1740]
                - img "event" [ref=e1742]
                - generic [ref=e1743]:
                  - generic [ref=e1744]:
                    - list "filter by items" [ref=e1745]:
                      - listitem [ref=e1746]:
                        - button "Social" [ref=e1747] [cursor=pointer]
                    - generic [ref=e1749]:
                      - generic [ref=e1751]: Jun 15, 2026
                      - generic [ref=e1752]: "|"
                      - generic [ref=e1753]: 1:00 PM
                    - paragraph [ref=e1756]: office 113, st. Svetlitsky 35
                    - generic [ref=e1757]: Open
                    - paragraph [ref=e1761]: Updated Test Event
                  - button "More" [ref=e1763] [cursor=pointer]
                  - generic [ref=e1764]:
                    - generic [ref=e1765]:
                      - img "date" [ref=e1766]
                      - paragraph [ref=e1767]: May 10, 2026
                    - generic [ref=e1768]:
                      - img "author" [ref=e1769]
                      - paragraph [ref=e1770]: TestATestA
                    - generic [ref=e1771]:
                      - img "frame" [ref=e1772]
                      - paragraph [ref=e1773]: "0"
                    - generic [ref=e1774]:
                      - button "Like this event" [ref=e1775] [cursor=pointer]:
                        - img "Like" [ref=e1776]
                        - text: "0"
                      - button "Dislike this event" [ref=e1777] [cursor=pointer]:
                        - img "Dislike" [ref=e1778]
                        - text: "0"
              - generic [ref=e1781]:
                - generic [ref=e1784]:
                  - generic [ref=e1785]:
                    - img "*" [ref=e1786]
                    - img "*" [ref=e1787]
                    - img "*" [ref=e1788]
                  - generic:
                    - img "*" [ref=e1789]
                    - img "*" [ref=e1790]
                    - img "*" [ref=e1791]
                - img "event" [ref=e1793]
                - generic [ref=e1794]:
                  - generic [ref=e1795]:
                    - list "filter by items" [ref=e1796]:
                      - listitem [ref=e1797]:
                        - button "Social" [ref=e1798] [cursor=pointer]
                    - generic [ref=e1800]:
                      - generic [ref=e1802]: Jun 15, 2026
                      - generic [ref=e1803]: "|"
                      - generic [ref=e1804]: 1:00 PM
                    - paragraph [ref=e1807]: office 113, st. Svetlitsky 35
                    - generic [ref=e1808]: Open
                    - paragraph [ref=e1812]: Updated Test Event
                  - button "More" [ref=e1814] [cursor=pointer]
                  - generic [ref=e1815]:
                    - generic [ref=e1816]:
                      - img "date" [ref=e1817]
                      - paragraph [ref=e1818]: May 10, 2026
                    - generic [ref=e1819]:
                      - img "author" [ref=e1820]
                      - paragraph [ref=e1821]: TestATestA
                    - generic [ref=e1822]:
                      - img "frame" [ref=e1823]
                      - paragraph [ref=e1824]: "0"
                    - generic [ref=e1825]:
                      - button "Like this event" [ref=e1826] [cursor=pointer]:
                        - img "Like" [ref=e1827]
                        - text: "0"
                      - button "Dislike this event" [ref=e1828] [cursor=pointer]:
                        - img "Dislike" [ref=e1829]
                        - text: "0"
              - generic [ref=e1832]:
                - generic [ref=e1835]:
                  - generic [ref=e1836]:
                    - img "*" [ref=e1837]
                    - img "*" [ref=e1838]
                    - img "*" [ref=e1839]
                  - generic:
                    - img "*" [ref=e1840]
                    - img "*" [ref=e1841]
                    - img "*" [ref=e1842]
                - img "event" [ref=e1844]
                - generic [ref=e1845]:
                  - generic [ref=e1846]:
                    - list "filter by items" [ref=e1847]:
                      - listitem [ref=e1848]:
                        - button "Social" [ref=e1849] [cursor=pointer]
                    - generic [ref=e1851]:
                      - generic [ref=e1853]: Jun 15, 2026
                      - generic [ref=e1854]: "|"
                      - generic [ref=e1855]: 1:00 PM
                    - paragraph [ref=e1858]: office 113, st. Svetlitsky 35
                    - generic [ref=e1859]: Open
                    - paragraph [ref=e1863]: Updated Test Event
                  - button "More" [ref=e1865] [cursor=pointer]
                  - generic [ref=e1866]:
                    - generic [ref=e1867]:
                      - img "date" [ref=e1868]
                      - paragraph [ref=e1869]: May 10, 2026
                    - generic [ref=e1870]:
                      - img "author" [ref=e1871]
                      - paragraph [ref=e1872]: TestATestA
                    - generic [ref=e1873]:
                      - img "frame" [ref=e1874]
                      - paragraph [ref=e1875]: "0"
                    - generic [ref=e1876]:
                      - button "Like this event" [ref=e1877] [cursor=pointer]:
                        - img "Like" [ref=e1878]
                        - text: "0"
                      - button "Dislike this event" [ref=e1879] [cursor=pointer]:
                        - img "Dislike" [ref=e1880]
                        - text: "0"
              - generic [ref=e1883]:
                - generic [ref=e1886]:
                  - generic [ref=e1887]:
                    - img "*" [ref=e1888]
                    - img "*" [ref=e1889]
                    - img "*" [ref=e1890]
                  - generic:
                    - img "*" [ref=e1891]
                    - img "*" [ref=e1892]
                    - img "*" [ref=e1893]
                - img "event" [ref=e1895]
                - generic [ref=e1896]:
                  - generic [ref=e1897]:
                    - list "filter by items" [ref=e1898]:
                      - listitem [ref=e1899]:
                        - button "Social" [ref=e1900] [cursor=pointer]
                    - generic [ref=e1902]:
                      - generic [ref=e1904]: Jun 15, 2026
                      - generic [ref=e1905]: "|"
                      - generic [ref=e1906]: 1:00 PM
                    - paragraph [ref=e1909]: office 113, st. Svetlitsky 35
                    - generic [ref=e1910]: Open
                    - paragraph [ref=e1914]: Updated Test Event
                  - button "More" [ref=e1916] [cursor=pointer]
                  - generic [ref=e1917]:
                    - generic [ref=e1918]:
                      - img "date" [ref=e1919]
                      - paragraph [ref=e1920]: May 10, 2026
                    - generic [ref=e1921]:
                      - img "author" [ref=e1922]
                      - paragraph [ref=e1923]: TestATestA
                    - generic [ref=e1924]:
                      - img "frame" [ref=e1925]
                      - paragraph [ref=e1926]: "0"
                    - generic [ref=e1927]:
                      - button "Like this event" [ref=e1928] [cursor=pointer]:
                        - img "Like" [ref=e1929]
                        - text: "0"
                      - button "Dislike this event" [ref=e1930] [cursor=pointer]:
                        - img "Dislike" [ref=e1931]
                        - text: "0"
              - generic [ref=e1934]:
                - generic [ref=e1937]:
                  - generic [ref=e1938]:
                    - img "*" [ref=e1939]
                    - img "*" [ref=e1940]
                    - img "*" [ref=e1941]
                  - generic:
                    - img "*" [ref=e1942]
                    - img "*" [ref=e1943]
                    - img "*" [ref=e1944]
                - img "event" [ref=e1946]
                - generic [ref=e1947]:
                  - generic [ref=e1948]:
                    - list "filter by items" [ref=e1949]:
                      - listitem [ref=e1950]:
                        - button "Social" [ref=e1951] [cursor=pointer]
                    - generic [ref=e1953]:
                      - generic [ref=e1955]: Jun 15, 2026
                      - generic [ref=e1956]: "|"
                      - generic [ref=e1957]: 1:00 PM
                    - paragraph [ref=e1960]: office 113, st. Svetlitsky 35
                    - generic [ref=e1961]: Open
                    - paragraph [ref=e1965]: Updated Test Event
                  - button "More" [ref=e1967] [cursor=pointer]
                  - generic [ref=e1968]:
                    - generic [ref=e1969]:
                      - img "date" [ref=e1970]
                      - paragraph [ref=e1971]: May 10, 2026
                    - generic [ref=e1972]:
                      - img "author" [ref=e1973]
                      - paragraph [ref=e1974]: TestATestA
                    - generic [ref=e1975]:
                      - img "frame" [ref=e1976]
                      - paragraph [ref=e1977]: "0"
                    - generic [ref=e1978]:
                      - button "Like this event" [ref=e1979] [cursor=pointer]:
                        - img "Like" [ref=e1980]
                        - text: "0"
                      - button "Dislike this event" [ref=e1981] [cursor=pointer]:
                        - img "Dislike" [ref=e1982]
                        - text: "0"
            - progressbar [ref=e1984]
          - contentinfo [ref=e2000]:
            - generic [ref=e2001]:
              - generic [ref=e2002]:
                - link [ref=e2004] [cursor=pointer]:
                  - /url: "#/greenCity"
                  - img "GreenCity home" [ref=e2005]
                - navigation [ref=e2006]:
                  - menu [ref=e2007]:
                    - listitem [ref=e2008]:
                      - link "Eco news" [ref=e2009] [cursor=pointer]:
                        - /url: "#/greenCity/news"
                    - listitem [ref=e2010]:
                      - link "Events" [ref=e2011] [cursor=pointer]:
                        - /url: "#/greenCity/events"
                    - listitem [ref=e2012]:
                      - link "Places" [ref=e2013] [cursor=pointer]:
                        - /url: "#/greenCity/places"
                    - listitem [ref=e2014]:
                      - link "About Us" [ref=e2015] [cursor=pointer]:
                        - /url: "#/greenCity/about"
                    - listitem [ref=e2016]:
                      - link "My Space" [ref=e2017] [cursor=pointer]:
                        - /url: "#/greenCity/profile/not_signed-in"
                    - listitem [ref=e2018]:
                      - link "UBS Courier" [ref=e2019] [cursor=pointer]:
                        - /url: "#/ubs"
                  - menu [ref=e2020]:
                    - listitem [ref=e2021]:
                      - paragraph [ref=e2022]: Follow us
                    - listitem [ref=e2023]:
                      - link [ref=e2024] [cursor=pointer]:
                        - /url: "#"
                        - img "Twitter link" [ref=e2025]
                      - link [ref=e2026] [cursor=pointer]:
                        - /url: "#"
                        - img "LinkedIn link" [ref=e2027]
                      - link [ref=e2028] [cursor=pointer]:
                        - /url: "#"
                        - img "Facebook link" [ref=e2029]
                      - link [ref=e2030] [cursor=pointer]:
                        - /url: "#"
                        - img "Instagram link" [ref=e2031]
                      - link [ref=e2032] [cursor=pointer]:
                        - /url: "#"
                        - img "YouTube link" [ref=e2033]
              - generic [ref=e2034]: © Copyright 2026. Green City.
    - button [ref=e2035] [cursor=pointer]:
      - img "chat" [ref=e2036]
  - generic [ref=e2037]: Welcome to the search window
```

# Test source

```ts
  134 |   get itemsFound(): Locator {
  135 |     return this.itemsFoundElement;
  136 |   }
  137 | 
  138 |   /** Returns the active filter indicator locator (all chips or first chip) */
  139 |   get activeFilterIndicator(): Locator {
  140 |     return this.activeFilterChipsRoots;
  141 |   }
  142 | 
  143 |   /** Returns the count of currently displayed active filter chips */
  144 |   async getActiveFilterChipsCount(): Promise<number> {
  145 |     return await test.step('Get active filter chips count', async () => {
  146 |       return await this.activeFilterChipsRoots.count();
  147 |     });
  148 |   }
  149 | 
  150 |   /** Returns an ActiveFilterChipComponent by its index */
  151 |   getActiveFilterChipByIndex(index: number): ActiveFilterChipComponent {
  152 |     return new ActiveFilterChipComponent(this.activeFilterChipsRoots.nth(index), this.page);
  153 |   }
  154 | 
  155 |   /** Returns an ActiveFilterChipComponent matching the provided text or pattern */
  156 |   getActiveFilterChipByText(text: string | RegExp): ActiveFilterChipComponent {
  157 |     const root = this.activeFilterChipsRoots.filter({ hasText: text }).first();
  158 |     return new ActiveFilterChipComponent(root, this.page);
  159 |   }
  160 | 
  161 |   /** Returns the active filter chip for a Type filter enum */
  162 |   getActiveFilterChipByType(type: EventTypeFilter): ActiveFilterChipComponent {
  163 |     return this.getActiveFilterChipByText(this.i18n.typeOptions[type]);
  164 |   }
  165 | 
  166 |   /** Returns the active filter chip for a Location filter enum */
  167 |   getActiveFilterChipByLocation(location: EventLocationFilter): ActiveFilterChipComponent {
  168 |     return this.getActiveFilterChipByText(this.i18n.locationOptions[location]);
  169 |   }
  170 | 
  171 |   /** Returns the active filter chip for a Status filter enum */
  172 |   getActiveFilterChipByStatus(status: EventStatusFilter): ActiveFilterChipComponent {
  173 |     return this.getActiveFilterChipByText(this.i18n.statusOptions[status]);
  174 |   }
  175 | 
  176 |   /** Returns the active filter chip for a Time filter enum */
  177 |   getActiveFilterChipByTime(time: EventTimeFilter): ActiveFilterChipComponent {
  178 |     return this.getActiveFilterChipByText(this.i18n.timeOptions[time]);
  179 |   }
  180 | 
  181 |   /** Returns the date range active filter chip */
  182 |   getActiveDateRangeChip(): ActiveFilterChipComponent {
  183 |     return this.getActiveFilterChipByText(/\d+[./]\d+[./]\d{4}/);
  184 |   }
  185 | 
  186 |   /** Returns all active filter chips as components */
  187 |   async getAllActiveFilterChips(): Promise<ActiveFilterChipComponent[]> {
  188 |     const count = await this.getActiveFilterChipsCount();
  189 |     const chips: ActiveFilterChipComponent[] = [];
  190 |     for (let i = 0; i < count; i++) {
  191 |       chips.push(this.getActiveFilterChipByIndex(i));
  192 |     }
  193 |     return chips;
  194 |   }
  195 | 
  196 |   /** Returns texts of all active filter chips */
  197 |   async getAllActiveFilterTexts(): Promise<string[]> {
  198 |     return await test.step('Get all active filter texts', async () => {
  199 |       const chips = await this.getAllActiveFilterChips();
  200 |       const texts: string[] = [];
  201 |       for (const chip of chips) {
  202 |         texts.push(await chip.getText());
  203 |       }
  204 |       return texts;
  205 |     });
  206 |   }
  207 | 
  208 |   /** Switches the event cards view to "grid" */
  209 |   async clickGridView(): Promise<void> {
  210 |     await test.step('Switch to grid view', async () => {
  211 |       await this.gridViewButton.click();
  212 |     });
  213 |   }
  214 | 
  215 |   /** Switches the event cards view to "list" */
  216 |   async clickListView(): Promise<void> {
  217 |     await test.step('Switch to list view', async () => {
  218 |       await this.listViewButton.click();
  219 |     });
  220 |   }
  221 | 
  222 |   /** Returns the number of event cards currently rendered in grid mode */
  223 |   async getGridEventCardsCount(): Promise<number> {
  224 |     return await this.gridEventCardRoots.count();
  225 |   }
  226 | 
  227 |   /** Scrolls through the grid until the end-of-list indicator is visible. */
  228 |   async scrollUntilAllEventCardsLoad(): Promise<void> {
  229 |     while (!(await this.isEndOfEventsListVisible())) {
  230 |       const loadedCount = await this.getGridEventCardsCount();
  231 | 
  232 |       await this.scrollPage('down');
  233 | 
> 234 |       await expect.poll(() => this.getGridEventCardsCount()).toBeGreaterThanOrEqual(loadedCount);
      |                                                              ^ Error: Test timeout of 30000ms exceeded
  235 |     }
  236 |   }
  237 | 
  238 |   /** Returns the number of event cards currently rendered in list mode */
  239 |   async getListEventCardsCount(): Promise<number> {
  240 |     return await this.listEventCardRoots.count();
  241 |   }
  242 | 
  243 |   /** Returns a GridEventCardComponent for the card at the given position */
  244 |   getGridEventCardByIndex(index: number): GridEventCardComponent {
  245 |     return new GridEventCardComponent(this.gridEventCardRoots.nth(index), this.page);
  246 |   }
  247 | 
  248 |   /** Returns the first event card that is available for joining. */
  249 |   getFirstJoinableGridEventCard(): GridEventCardComponent {
  250 |     const root = this.gridEventCardRoots
  251 |       .filter({
  252 |         has: this.page.getByRole('button', { name: 'Join event', exact: true }),
  253 |       })
  254 |       .first();
  255 | 
  256 |     return new GridEventCardComponent(root, this.page);
  257 |   }
  258 |   /** Returns a ListEventCardComponent for the card at the given position */
  259 |   getListEventCardByIndex(index: number): ListEventCardComponent {
  260 |     return new ListEventCardComponent(this.listEventCardRoots.nth(index), this.page);
  261 |   }
  262 | 
  263 |   /** Returns a GridEventCard component for the first card whose title matches the given text */
  264 |   getGridEventCardByTitle(title: string): GridEventCardComponent {
  265 |     const root = this.gridEventCardRoots.filter({ hasText: title }).first();
  266 | 
  267 |     return new GridEventCardComponent(root, this.page);
  268 |   }
  269 | 
  270 |   /** Returns a ListEventCard component for the first card whose title matches the given text */
  271 |   getListEventCardByTitle(title: string): ListEventCardComponent {
  272 |     const root = this.listEventCardRoots.filter({ hasText: title }).first();
  273 | 
  274 |     return new ListEventCardComponent(root, this.page);
  275 |   }
  276 | 
  277 |   /** Returns whether an event with an enabled edit action is available */
  278 |   async hasEditableEventCard(): Promise<boolean> {
  279 |     const editButtons = this.page.getByRole('button', { name: 'Edit event' });
  280 |     const count = await editButtons.count();
  281 | 
  282 |     for (let index = 0; index < count; index++) {
  283 |       const editButton = editButtons.nth(index);
  284 |       if ((await editButton.isVisible()) && (await editButton.isEnabled())) {
  285 |         return true;
  286 |       }
  287 |     }
  288 | 
  289 |     return false;
  290 |   }
  291 | 
  292 |   /** Returns the first event card that offers the author-only edit action */
  293 |   async getFirstEditableEventCard(
  294 |     createEventIfMissing?: () => Promise<unknown>
  295 |   ): Promise<GridEventCardComponent | ListEventCardComponent> {
  296 |     if (!(await this.hasEditableEventCard()) && createEventIfMissing) {
  297 |       await createEventIfMissing();
  298 |     }
  299 | 
  300 |     const gridCardCount = await this.gridEventCardRoots.count();
  301 |     for (let index = 0; index < gridCardCount; index++) {
  302 |       const gridCard = this.gridEventCardRoots.nth(index);
  303 |       const editButton = gridCard.getByRole('button', { name: 'Edit event' });
  304 | 
  305 |       if ((await editButton.isVisible()) && (await editButton.isEnabled())) {
  306 |         return new GridEventCardComponent(gridCard, this.page);
  307 |       }
  308 |     }
  309 | 
  310 |     const listCardCount = await this.listEventCardRoots.count();
  311 |     for (let index = 0; index < listCardCount; index++) {
  312 |       const listCard = this.listEventCardRoots.nth(index);
  313 |       const editButton = listCard.getByRole('button', { name: 'Edit event' });
  314 | 
  315 |       if ((await editButton.isVisible()) && (await editButton.isEnabled())) {
  316 |         return new ListEventCardComponent(listCard, this.page);
  317 |       }
  318 |     }
  319 | 
  320 |     throw new Error('No event card with an Edit event action was found.');
  321 |   }
  322 | 
  323 |   /** Returns the event card matching a title in the current view mode */
  324 |   async getEventCardByTitle(
  325 |     title: string
  326 |   ): Promise<GridEventCardComponent | ListEventCardComponent> {
  327 |     const gridCard = this.gridEventCardRoots.filter({ hasText: title }).first();
  328 | 
  329 |     try {
  330 |       await gridCard.waitFor({ state: 'visible' });
  331 |       return new GridEventCardComponent(gridCard, this.page);
  332 |     } catch {
  333 |       const listCard = this.listEventCardRoots.filter({ hasText: title }).first();
  334 | 
```