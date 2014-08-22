describe('translateFermentableToDisplay', function () {

  beforeEach(module('brew-everywhere'));

  it('should create a new projection', inject(function ($filter) {

    var fermentables = [
      { "Name": "Acid Malt", "Type": "Grain", "Amount": 0.000000, "Yeild": 58.7, "Color": 3.0, "AddAfterBoil": false, "Origin": "Germany", "Supplier": "", "Notes": "Acid malt contains acids from natural lactic acids.  Used by German brewers to adjust malt PH without chemicals to adhere to German purity laws.  Also enhances the head retention. ", "CoarseFineDiff": 1.5, "Moisture": 4.0, "DiastaticPower": 0.0, "Protein": 6.0, "MaxInBatch": 10.0, "RecommendMash": true, "IBUGalPerPound": 0.000, "DisplayAmount": "0.0 oz", "Potential": 1.027, "DisplayColor": 3.0, "ExtractSubstitute": "Pale Liquid Extract"},
      { "Name": "Amber Dry Extract", "Type": "Dry Extract", "Amount": 0.000000, "Yeild": 95.0, "Color": 12.5, "AddAfterBoil": false, "Origin": "US", "Supplier": "", "Notes": "Amber colored dry malt extract, for general purpose use.Use in any medium to dark colored beer.Examples: Ales, Marzens, Amber Ale, India Pale Ale", "CoarseFineDiff": 0.0, "Moisture": 0.0, "DiastaticPower": 0.0, "Protein": 0.0, "MaxInBatch": 100.0, "RecommendMash": false, "IBUGalPerPound": 0.000, "DisplayAmount": "0.0 oz", "Potential": 1.044, "DisplayColor": 12.5, "ExtractSubstitute": "-"},
      { "Name": "Amber Liquid Extract", "Type": "Extract", "Amount": 0.000000, "Yeild": 78.0, "Color": 12.5, "AddAfterBoil": false, "Origin": "US", "Supplier": "", "Notes": "Unhopped amber color liquid extract.Use as a base malt for any Ale.Examples: Amber ale, India Pale Ale, Munich style, Marzen, Bock", "CoarseFineDiff": 0.0, "Moisture": 0.0, "DiastaticPower": 0.0, "Protein": 0.0, "MaxInBatch": 100.0, "RecommendMash": false, "IBUGalPerPound": 0.000, "DisplayAmount": "0.0 oz", "Potential": 1.036, "DisplayColor": 12.5, "ExtractSubstitute": "-"},
      { "Name": "Amber Malt", "Type": "Grain", "Amount": 0.000000, "Yeild": 75.0, "Color": 22.0, "AddAfterBoil": false, "Origin": "United Kingdom", "Supplier": "", "Notes": "Roasted specialty malt used in some English browns, milds and old ales to add color and a biscuit taste.  Intense flavor - so limit use. Low diastatic power so must be mashed with well modified malts.", "CoarseFineDiff": 1.5, "Moisture": 2.8, "DiastaticPower": 20.0, "Protein": 10.0, "MaxInBatch": 20.0, "RecommendMash": true, "IBUGalPerPound": 0.000, "DisplayAmount": "0.0 oz", "Potential": 1.035, "DisplayColor": 22.0, "ExtractSubstitute": "Caramel/Crystal Malt - 20L"},
      { "Name": "Aromatic Malt", "Type": "Grain", "Amount": 0.000000, "Yeild": 78.0, "Color": 26.0, "AddAfterBoil": false, "Origin": "Belgium", "Supplier": "", "Notes": "Provides a very strong malt flavor and aroma to your beer.", "CoarseFineDiff": 1.5, "Moisture": 4.0, "DiastaticPower": 29.0, "Protein": 11.8, "MaxInBatch": 10.0, "RecommendMash": true, "IBUGalPerPound": 0.000, "DisplayAmount": "0.0 oz", "Potential": 1.036, "DisplayColor": 26.0, "ExtractSubstitute": "Caravienne Malt"},
      { "Name": "Barley Hulls", "Type": "Adjunct", "Amount": 0.000000, "Yeild": 0.0, "Color": 0.0, "AddAfterBoil": false, "Origin": "US", "Supplier": "", "Notes": "Hulls are introduced to improve the speed of lautering when making high gravity or high adjunct beers.Hulls are neutral in flavor, body and color, and are inertGood for wheat beers, Wits, and others that have high protein mashes.", "CoarseFineDiff": 0.0, "Moisture": 0.0, "DiastaticPower": 0.0, "Protein": 0.0, "MaxInBatch": 5.0, "RecommendMash": false, "IBUGalPerPound": 0.000, "DisplayAmount": "0.0 oz", "Potential": 1.000, "DisplayColor": 0.0, "ExtractSubstitute": "-"}
    ];

    var expected = [
      { Name: 'Acid Malt', Type: 'Grain' },
      { Name: 'Amber Dry Extract', Type: 'Dry Extract' },
      { Name: 'Amber Liquid Extract', Type: 'Extract' },
      { Name: 'Amber Malt', Type: 'Grain' },
      { Name: 'Aromatic Malt', Type: 'Grain' },
      { Name: 'Barley Hulls', Type: 'Adjunct' }
    ];

    var filter = $filter('translateFermentableToDisplay');

    expect(filter(fermentables)).toEqual(expected);

  }));

});