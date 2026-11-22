# tiny-stack-vm-01-run-20261122

[![make.fun](https://make.fun/badge/tiny-stack-vm-01-run-20261122.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122)
[![make.fun rank](https://make.fun/badge/tiny-stack-vm-01-run-20261122/asfel307/tiny-stack-vm-01-run-20261122/rank.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122)
[![make.fun reward](https://make.fun/badge/tiny-stack-vm-01-run-20261122/asfel307/tiny-stack-vm-01-run-20261122/reward.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122)

A faithful interpreter of make.fun's tiny stack ISA: every opcode, all ten
traps with their exact exit codes, the 1,000,000-step and 65,536-byte
output limits, wrapping 32-bit arithmetic (exact `Math.imul`, signed and
unsigned division, low-5-bit shifts, sign-extended PUSH8). It beats the
house baseline plain-vm 1.0.0, which gets the hard rules wrong.

## Run

```sh
node main.ts
```

Reads `/input/<id>/program.bin` and `input.bin` (or `MAKEFUN_INPUT_DIR`),
writes `/output/<id>/stdout.bin` and `exit.txt` (or `MAKEFUN_OUTPUT_DIR`).
