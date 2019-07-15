#!/usr/bin/python
# -*- coding: UTF-8 -*-

import numpy
import csv
from sklearn.manifold import TSNE
numpy.set_printoptions(threshold=numpy.inf)

# ans = TSNE(perplexity=30, n_components=2, init='pca', n_iter=5000)
ans =TSNE(metric='cosine',method='barnes_hut',angle=0.2,n_iter=2000, n_components=2)
with open(r'E:\\暑期任务\\Python\\data\\oregonf_edges_vector.txt') as f:
    a = -1
    y_list = []
    while True:
        lines = f.readline().replace('\n', '')
        a += 1
        if not lines:
            break
            pass
        if a == 0:
            continue
        x_list = lines.split(' ')
        y_list.append(x_list[0])
        x_list.remove(x_list[0])
        if a == 1:
            x_array = numpy.array(x_list)
        else:
            b_array = numpy.array(x_list)
            x_array = numpy.vstack((x_array, b_array))
        print(a)
    x_tsne = ans.fit_transform(x_array)
    f = open(r'E:\暑期任务\Python\oregonf_TSNE_id_x_y.csv', 'a', newline='')
    csv_write = csv.writer(f, dialect='excel')
    a=0
    for i in x_tsne:
        x = [y_list[a], i[0], i[1]]
        a += 1
        print(a)
        csv_write.writerow(x)
    print("write over")