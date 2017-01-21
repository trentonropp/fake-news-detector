firstArticleKeywords=[]
firstArticlelKeywords=article.keywords


def compareKeywords():
    potentialKeywords=[]
    potentialKeywords=article.keywords
    i=0
    j=0
    count=0
    while(i<len(firstArticleKeywords)):
        while(j<len(potentialKeywords)):
            count +=1
            j+=1
        i+=1
    if len(firstArticleKeywords)>len(potentialKeywords):
        return len(potentialKeywords)/count
    else:
        return len(firstArticleKeywords)/count
