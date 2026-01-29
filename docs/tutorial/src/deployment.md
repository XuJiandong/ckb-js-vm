# Reproducible Build and Deployment

When deploying an on-chain script, it's essential to build it from scratch. A key requirement during this process is
ensuring that different builds of the same source code produce identical binaries - this is known as a "reproducible
build."

You can achieve this with ckb-js-vm using the following command:

  ```bash
  bash reproducible_build.sh
  ```

## Deployment

The script has been deployed on the testnet with these parameters:

| Parameter   | Value                                                                |
| ----------- | -------------------------------------------------------------------- |
| `code_hash` | `0x3e9b6bead927bef62fcb56f0c79f4fbd1b739f32dd222beac10d346f2918bed7` |
| `hash_type` | `type`                                                               |
| `tx_hash`   | `0x756fdaf0d1ba1d2e03dc13c71c967b24021bc054893a766ccee6879c468892d2` |
| `index`     | `0x0`                                                                |
| `dep_type`  | `code`                                                               |

The corresponding SHA256 checksum in [checksums.txt](https://github.com/nervosnetwork/ckb-js-vm/blob/main/checksums.txt)
is: `721318de24bff4d8b26d20d4d05a9b8e79c04dadfb29da3fd0863e2b9f0da8c4`
