// Ten distance bands, with ten individually written excuses per band.
const excuseBands = [
  { label: 'SO CLOSE, YET SO LATE', items: [
    "The elevator broke, so I had to take the stairs.", "I forgot my student ID and had to go back home.", "My front door wouldn't lock. We had a disagreement.", "I went to the wrong floor and had to come back down.", "The entry gate kept rejecting my student ID.", "I spilled coffee and had to change my shirt.", "My shoelace snapped, so I had to find another pair.", "I missed the crosswalk signal three times in a row.", "I went back upstairs for my laptop charger.", "My keys disappeared into the lining of my bag."
  ]},
  { label: 'JUST A FEW BLOCKS AWAY', items: [
    "They said my bagel would be ready in just two more minutes.", "My dog sat on my shoes and refused to move.", "Sidewalk construction sent me around the entire block.", "My umbrella turned inside out and needed emergency repairs.", "The laundromat dryer wouldn't give my clothes back.", "I accepted a package for my neighbor and got stuck chatting.", "Every traffic light seemed to be waiting to turn red for me.", "I gave a tourist directions and confused myself too.", "My coffee lid kept coming off, so walking became a challenge.", "It started raining as soon as I left, so I went back for an umbrella."
  ]},
  { label: 'THE BUS WAS ALMOST HERE', items: [
    "The bus was late, so I kept waiting at the stop.", "The bus arrival time jumped from two minutes to eighteen.", "The bus was full and closed its doors right in front of me.", "The bus stop had moved. I was waiting at the old one.", "The bus stopped at every light. Pedestrians were passing us.", "The bus driver had to change shifts.", "I rode two stops before realizing I was going the wrong way.", "The bus took a detour and dropped me on an unfamiliar street.", "My transit card wouldn't scan, so I had to pay again.", "I pressed the stop button a little too late."
  ]},
  { label: 'UNDERGROUND, OUT OF LUCK', items: [
    "The subway stopped in the tunnel and stayed there.", "I didn't realize the express train skipped my stop.", "I thought I was heading downtown. It was an uptown train.", "The station entrance was closed, so I walked to the other side.", "The turnstile wouldn't read my card, so I joined the line again.", "They announced the train was arriving soon. Five times.", "I missed the platform-change announcement and then the train.", "I waited by the doors, but they opened on the other side.", "The train skipped my station, so I had to double back.", "I had no signal underground and couldn't check the schedule."
  ]},
  { label: 'A TRANSFER TOO MANY', items: [
    "The transfer tunnel was much longer than it looked.", "My connecting train left just as I reached the platform.", "I somehow climbed the same station stairs twice.", "The escalator at the transfer station wasn't working.", "The train changed routes, so I had to transfer again.", "I looked for the platform and accidentally exited the station.", "Both lines were delayed. There wasn't a winning choice.", "My bag opened during the transfer and I had to pick everything up.", "The transfer signs led me straight to a construction barrier.", "The train I was waiting for suddenly went out of service."
  ]},
  { label: 'BRIDGE & TUNNEL PROBLEMS', items: [
    "Traffic on the bridge didn't move an inch.", "My taxi got stuck at the tunnel entrance.", "I couldn't find the bike entrance to the bridge.", "The wind on the bridge was so strong I had to walk my bike.", "My taxi driver and I had different Fifth Avenues in mind.", "A road closure blocked the entrance to the bridge.", "I crossed the river and immediately ran into roadwork.", "My taxi took a wrong turn and crossed the river again.", "Every nearby bike dock was full when I tried to return my bike.", "I missed the ferry by seconds and had to wait for the next one."
  ]},
  { label: 'THE COMMUTE HAS A PLOT', items: [
    "My bike got a flat tire, so I walked the rest of the way.", "The rental bike refused to unlock.", "A film shoot had closed the entire street.", "I followed a marathon detour and ended up farther away.", "The rain made me abandon my bike and switch to the subway.", "Three drivers canceled before I finally got a taxi.", "My phone died, so I navigated from memory.", "I only noticed the station-closure notice when I got there.", "My bag handle broke, so I carried it with both hands.", "I fell asleep on the train and missed my stop by two stations."
  ]},
  { label: 'COMING FROM ANOTHER CHAPTER', items: [
    "My local line wasn't running, so I took the shuttle bus.", "My connecting commuter train left without me.", "The departure platform changed at the last minute.", "My taxi said it had arrived. It was on another block.", "I left my portfolio in the car and had to track it down.", "The rain flooded the station entrance.", "My detour had another detour, and then I got lost.", "The bus and subway took turns being late.", "Two navigation apps told me to go in opposite directions.", "Every form of transportation decided to test me today."
  ]},
  { label: 'A VERY LONG STORY', items: [
    "My commuter train was canceled right before departure.", "I missed both the ferry and the subway by seconds.", "I left my umbrella on the train and went to lost and found.", "A moving truck blocked the road to the station.", "I missed the bus-to-train connection by one minute.", "I reached Manhattan, but my station exit was at the other end.", "I took an express train and got farther from school.", "I was fixing my assignment on the subway and missed my stop.", "My taxi's arrival time kept moving into the future.", "I left early. The city started late."
  ]},
  { label: 'AT THIS POINT, IT’S A JOURNEY', items: [
    "I started so far away that my commute became a small vacation.", "My train was delayed before I even reached New York.", "My suitcase was the very last one off the airport carousel.", "My long-distance bus got stuck on the way into Manhattan.", "I set my alarm in the wrong time zone.", "The station names looked alike. I nearly got off in another city.", "I made three transfers and still had a fourth to go.", "It was still early where I started.", "The journey to school took longer than the assignment.", "My body is still on its way, but my heart is already in class."
  ]}
];
if (typeof module !== 'undefined') module.exports = excuseBands;
