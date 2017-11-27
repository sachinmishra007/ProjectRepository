﻿using System;
using System.Collections;
using System.Collections.Generic;
using System.Configuration;
using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;
using Microsoft.Azure.Documents.Linq;
using System.Threading.Tasks;
using System.Linq;
using MVCBsuinessEntities;

namespace MVCProjectExample.DataAccessLayer
{
    public class AzureCosmosDB<T>
    {
        private readonly string _cosmosdbEndpointUrl = ConfigurationManager.AppSettings["CosmosDBEndpointKey"];
        private readonly string _cosmosDBPrimaryPassword = ConfigurationManager.AppSettings["CosmosDBPrimaryPassword"];
        private readonly string _cosmosdbName = ConfigurationManager.AppSettings["CosmosDBName"];


        private Database _database;
        private DocumentClient _client;
        private DocumentCollection _collection;

        public AzureCosmosDB()
        {
        }

        public async Task<AzureCosmosDB<T>> Init(string _collectionName)
        {
            _client = new DocumentClient(new Uri(_cosmosdbEndpointUrl), _cosmosDBPrimaryPassword);
            _database = await CreateOrGetDatabase(_cosmosdbName);
            _collection = await CreateOrGetCollectionName(_collectionName);
            return this;
        }

        private async Task<Database> CreateOrGetDatabase(string _databaseName)
        {
            var databases = _client.CreateDatabaseQuery().Where(db => db.Id == _databaseName).ToArray();
            if (databases.Any())
            {
                return databases.First();
            }
            else
            {
                return await _client.CreateDatabaseAsync(new Database()
                {
                    Id = _databaseName
                });
            }

        }

        private async Task<DocumentCollection> CreateOrGetCollectionName(string _collectionName)
        {
            var collections = _client.CreateDocumentCollectionQuery(_database.CollectionsLink)
                            .Where(col => col.Id == _collectionName).ToArray();

            if (collections.Any())
            {
                return collections.First();
            }
            else
            {
                return await _client.CreateDocumentCollectionAsync(_database.CollectionsLink,
                    new DocumentCollection()
                    {
                        Id = _collectionName
                    });
            }
        }


        // Insert Fund Records
        public void InsertFundDocuments(T _fundInformation)
        {
            _client.CreateDocumentAsync(_collection.DocumentsLink, _fundInformation).Wait();
        }

        public List<Funds> GetFundDocuments()
        {
            return _client.CreateDocumentQuery(_collection.DocumentsLink, "SELECT * FROM Funds").AsEnumerable().Select(data => new Funds()
            {
                FundName = data.fundname,
                FundCode = data.fundcode,
                AllowedFundPercentageAllocation = data.allowedpercentageallocation,
                id = data.id,
                _self = data._self
            }).ToList<Funds>();
        }
    }
}