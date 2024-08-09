# NENO-NODE-SDK

The node SDK to send SMS with Neno API to Rwandan users

## How to install

Follow the installation guide [here](https://github.com/use-neno/node-sdk/pkgs/npm/node-sdk)

## How to use

### 1. Import

Import the client from the package like this:

``` typescript
import Client from "@use-neno/node-sdk"
```

or

``` typescript
Const Client = require("@use-neno/node-sdk")
```

### 2. Initialize the client

``` typescript
const nenoClient = new Client(process.env.NENO_API_KEY) // pass in the api key from your project settings
```

### 3. Send SMS

``` typescript
... // your existing code
const sendingSms = await nenoClient.sendSMS("example message", ["250788...."])
... // your existing code

```
