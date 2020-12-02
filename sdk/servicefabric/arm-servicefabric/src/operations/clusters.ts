/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/clustersMappers";
import * as Parameters from "../models/parameters";
import { ServiceFabricManagementClientContext } from "../serviceFabricManagementClientContext";

/** Class representing a Clusters. */
export class Clusters {
  private readonly client: ServiceFabricManagementClientContext;

  /**
   * Create a Clusters.
   * @param {ServiceFabricManagementClientContext} client Reference to the service client.
   */
  constructor(client: ServiceFabricManagementClientContext) {
    this.client = client;
  }

  /**
   * Get a Service Fabric cluster resource created or in the process of being created in the
   * specified resource group.
   * @summary Gets a Service Fabric cluster resource.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersGetResponse>
   */
  get(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<Models.ClustersGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster resource.
   * @param callback The callback
   */
  get(resourceGroupName: string, clusterName: string, callback: msRest.ServiceCallback<Models.Cluster>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, clusterName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Cluster>): void;
  get(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Cluster>, callback?: msRest.ServiceCallback<Models.Cluster>): Promise<Models.ClustersGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ClustersGetResponse>;
  }

  /**
   * Create or update a Service Fabric cluster resource with the specified name.
   * @summary Creates or updates a Service Fabric cluster resource.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster resource.
   * @param parameters The cluster resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, clusterName: string, parameters: Models.Cluster, options?: msRest.RequestOptionsBase): Promise<Models.ClustersCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,clusterName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ClustersCreateOrUpdateResponse>;
  }

  /**
   * Update the configuration of a Service Fabric cluster resource with the specified name.
   * @summary Updates the configuration of a Service Fabric cluster resource.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster resource.
   * @param parameters The parameters which contains the property value and property name which used
   * to update the cluster configuration.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersUpdateResponse>
   */
  update(resourceGroupName: string, clusterName: string, parameters: Models.ClusterUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.ClustersUpdateResponse> {
    return this.beginUpdate(resourceGroupName,clusterName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ClustersUpdateResponse>;
  }

  /**
   * Delete a Service Fabric cluster resource with the specified name.
   * @summary Deletes a Service Fabric cluster resource.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster resource.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster resource.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, clusterName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, clusterName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets all Service Fabric cluster resources created or in the process of being created in the
   * resource group.
   * @summary Gets the list of Service Fabric cluster resources created in the specified resource
   * group.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.ClustersListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ClusterListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ClusterListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ClusterListResult>, callback?: msRest.ServiceCallback<Models.ClusterListResult>): Promise<Models.ClustersListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.ClustersListByResourceGroupResponse>;
  }

  /**
   * Gets all Service Fabric cluster resources created or in the process of being created in the
   * subscription.
   * @summary Gets the list of Service Fabric cluster resources created in the specified
   * subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.ClustersListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.ClusterListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ClusterListResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ClusterListResult>, callback?: msRest.ServiceCallback<Models.ClusterListResult>): Promise<Models.ClustersListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ClustersListResponse>;
  }

  /**
   * Create or update a Service Fabric cluster resource with the specified name.
   * @summary Creates or updates a Service Fabric cluster resource.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster resource.
   * @param parameters The cluster resource.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, clusterName: string, parameters: Models.Cluster, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Update the configuration of a Service Fabric cluster resource with the specified name.
   * @summary Updates the configuration of a Service Fabric cluster resource.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster resource.
   * @param parameters The parameters which contains the property value and property name which used
   * to update the cluster configuration.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, clusterName: string, parameters: Models.ClusterUpdateParameters, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        parameters,
        options
      },
      beginUpdateOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Cluster
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ClusterListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/clusters",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ClusterListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.Cluster,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Cluster
    },
    202: {
      bodyMapper: Mappers.Cluster
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ClusterUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Cluster
    },
    202: {
      bodyMapper: Mappers.Cluster
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};