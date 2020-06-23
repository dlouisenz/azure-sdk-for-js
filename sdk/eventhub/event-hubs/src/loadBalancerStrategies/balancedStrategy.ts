// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { PartitionOwnership } from "../eventProcessor";
import { LoadBalancingStrategy, identifyClaimablePartitions } from "./loadBalancingStrategy";

/**
 * @internal
 * @ignore
 */
export class BalancedLoadBalancingStrategy implements LoadBalancingStrategy {
  /**
   * Creates an instance of BalancedLoadBalancingStrategy.
   *
   * @param _partitionOwnershipExpirationIntervalInMs The length of time a partition claim is valid.
   */
  constructor(private readonly _partitionOwnershipExpirationIntervalInMs: number) {}

  /**
   * Implements load balancing by taking into account current ownership and
   * the new set of partitions to add.
   * @param ourOwnerId The id we should assume is _our_ id when checking for ownership.
   * @param claimedPartitionOwnershipMap The current claimed ownerships for partitions.
   * @param partitionIds Partitions to assign owners to.
   * @returns Partition ids to claim.
   */
  public identifyPartitionsToClaim(
    ourOwnerId: string,
    claimedPartitionOwnershipMap: Map<string, PartitionOwnership>,
    partitionIds: string[]
  ): string[] {
    const claimablePartitions = identifyClaimablePartitions(
      ourOwnerId,
      claimedPartitionOwnershipMap,
      partitionIds,
      this._partitionOwnershipExpirationIntervalInMs
    );

    const randomIndex = Math.floor(Math.random() * claimablePartitions.length);
    return [claimablePartitions[randomIndex]];
  }
}