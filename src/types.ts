import { Character } from '@ai16z/eliza';

/**
 * NFT metadata
 * @see https://developers.metaplex.com/token-metadata/token-standard
 */
export interface NftMetadata {
  /**
   * Name of the asset.
   */
  name: string;
  /**
   * Description of the asset.
   */
  description: string;
  /**
   * URI pointing to the asset's logo.
   */
  image: string;
  /**
   * URI pointing to the asset's animation.
   */
  animation_url?: string;
  /**
   * URI pointing to an external URL defining the asset — e.g. the game's main site.
   */
  external_url?: string;
  /**
   * Array of attributes defining the characteristics of the asset.
   */
  attributes: {
    /**
     * The type of attribute.
     */
    trait_type: string;
    /**
     * The value for that attribute.
     */
    value: string;
  }[];
  /**
   * Additional properties that define the asset.
   */
  properties: {
    /**
     * Additional files to include with the asset.
     */
    files: {
      /**
       * The file's URI.
       */
      uri: string;
      /**
       * The file's type. E.g. image/png, video/mp4, etc.
       */
      type: string;
      /**
       * Whether the file is served from a CDN.
       */
      cdn?: boolean;
    }[];
    /**
     * A media category for the asset. E.g. video, image, etc.
     */
    category: string;
  };
}

export enum AiAgentEngine {
  ELIZA = 'eliza',
}

/**
 * AI-NFT metadata
 * @see https://docs.xnomad.ai/ai-nft-metadata
 */
export type AiNftMetadata = NftMetadata & {
  /**
   * The configuration that define the AI agent connected with this NFT.
   */
  ai_agent?: {
    /**
     * The engine used to run the AI agent. Default as "eliza".
     */
    engine: AiAgentEngine;
    /**
     * The character file JSON that describes an AI agent.
     * @see https://elizaos.github.io/eliza/docs/core/characterfile/
     */
    character: Character;
  };
};

export type CollectionInfo = NftMetadata;

/**
 * Mint stage configuration
 */
export interface MintStage {
  /**
   * A unique text identifier. This cannot be longer than 6 characters for Solana.
   */
  label: string;
  /**
   * The price in SOL for the mint stage.
   */
  priceInSol: number;
  /**
   * The start date of the mint stage.
   */
  startDate: Date;
  /**
   * The end date of the mint stage.
   */
  endDate?: Date;
  /**
   * The maximum number of mints per wallet.
   */
  maxMintsPerWallet?: number;
  /**
   * The whitelist of addresses that can mint during this stage.
   */
  whitelist?: string[];
}

export interface EvmMintStage {
   /**
    * The price per nft for the mint stage.
    */
   pricePerNFT: number;
   /**
    * The start date of the mint stage.
    */
   startDate: Date;
   /**
    * The end date of the mint stage.
    */
   endDate?: Date;
   /**
    * The maximum number of mints per wallet.
    */
   maxMintsPerWallet?: number;
   /**
    * The whitelist of addresses that can mint during this stage.
    */
   whitelist?: string[] | WhitelistWithLimit[];
}

export interface WhitelistWithLimit {
  address: string;
  mintLimit: number;
}