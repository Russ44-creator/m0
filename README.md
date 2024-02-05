# M0: Setup & Centralized Computing
> Full name: `Lingfeng Deng`
> Email:  `lingfeng_deng@brown.edu`
> Username:  `dlingfen`

## Summary
> Summarize your implementation, including key challenges you encountered

My implementation comprises `9` software components, totaling `340` lines of code in the following languages: `140` lines of shell scripts and `200` of JavaScript code. Key challenges included `1. Having a deeper understanding of JavaScript; 2. Learning and mastering distributed streaming; 3. Learning Linux Shell syntax and programming`.

## Correctness & Performance Characterization
> Describe how you characterized the correctness and performance of your implementation

*Correctness*: My implementation passes `10` out of the `10` tests (`100`%) already provided for M0. I developed another `7` tests, which focus on `checking edges cases and some tests which result in failure`. All these tests, combined take `2m1.122s` to complete. `I added some tests on sandbox2 to test its correctness`.

*Performance*: Evaluating the entire system using the `time` command on the three sandboxes reports the following times:

|           | Engine   | Query    |
| --------- | -------- | -------- |
| Sandbox 1 | `2m10.213s` | `0m0.044s` |
| Sandbox 2 | `1m41.840s` | `0m0.213s` |
| Sandbox 3 | `over 120m` | `0m0.312s` |

## Time to Complete
> Roughly, how many hours did this milestone take you to complete?

Hours: `20`

## Wild Guess
> How many lines of code do you think it will take to build the fully distributed, scalable version of your search engine? (If at all possible, try to justify your answer — even a rough justification about the order of magnitude is enough)

DLoC: `10k lines of JavaScript Code`

