/**
 *       ***************************************
 *          AUTOGENERATED FILE - DO NOT EDIT
 *       ***************************************
 *
 * This file was generated by grpc-tools-node-protoc-promise-ts
 * https://github.com/rhinodavid/grpc-tools-node-protoc-promise-ts
 *
 * package: joke
 * file: joke.proto
 * generated at: Sun Apr 19 2020 02:19:58 GMT-0600 (Mountain Daylight Time)
 */

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
export class JokeRequest extends jspb.Message {
  getJokeKind(): JokeKind;
  setJokeKind(value: JokeKind): JokeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JokeRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: JokeRequest
  ): JokeRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: JokeRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): JokeRequest;
  static deserializeBinaryFromReader(
    message: JokeRequest,
    reader: jspb.BinaryReader
  ): JokeRequest;
}

export namespace JokeRequest {
  export type AsObject = {
    jokeKind: JokeKind;
  };
}

export class JokeResponse extends jspb.Message {
  getJoke(): string;
  setJoke(value: string): JokeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JokeResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: JokeResponse
  ): JokeResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: JokeResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): JokeResponse;
  static deserializeBinaryFromReader(
    message: JokeResponse,
    reader: jspb.BinaryReader
  ): JokeResponse;
}

export namespace JokeResponse {
  export type AsObject = {
    joke: string;
  };
}

export enum JokeKind {
  DOG = 0,
  PUN = 1,
  TEXT = 2,
}