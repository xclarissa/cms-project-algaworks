import * as WPC from "./WordPriceCounter.styles";

export interface WorldPriceCounterProps {
  wordsCount: number;
  pricePerWord: number;
}

export function WordPriceCounter({
  wordsCount,
  pricePerWord,
}: WorldPriceCounterProps) {

  if(wordsCount < 0) {
    throw Error('A quantidade de palavras não pode ser negativa!')
  }

  return (
    <WPC.Wrapper>
      <WPC.WordCounter>{wordsCount} palavras</WPC.WordCounter>
      <WPC.PricePreview>
        {(wordsCount * pricePerWord).toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
          maximumFractionDigits: 2,
        })}
      </WPC.PricePreview>
    </WPC.Wrapper>
  );
}
